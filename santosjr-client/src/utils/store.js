const USERS_KEY = 'bulldogex-users';
const CURRENT_USER_KEY = 'bulldogex-current-user';
const CART_KEY = 'bulldogex-cart';

const readJson = (key, fallback) => {
  if (typeof window === 'undefined') {
    return fallback;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallback;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
};

const emitChange = (eventName) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(new Event(eventName));
};

export const getUsers = () => readJson(USERS_KEY, []);

export const getCurrentUser = () => readJson(CURRENT_USER_KEY, null);

export const registerUser = ({ firstName, lastName, email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return {
      ok: false,
      message: 'An account with that email already exists.',
    };
  }

  const newUser = {
    id: crypto.randomUUID(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: normalizedEmail,
    password,
  };

  const updatedUsers = [...users, newUser];
  writeJson(USERS_KEY, updatedUsers);
  writeJson(CURRENT_USER_KEY, newUser);
  emitChange('authchange');

  return {
    ok: true,
    user: newUser,
  };
};

export const signInUser = ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const user = getUsers().find(
    (storedUser) => storedUser.email === normalizedEmail && storedUser.password === password,
  );

  if (!user) {
    return {
      ok: false,
      message: 'Incorrect email or password.',
    };
  }

  writeJson(CURRENT_USER_KEY, user);
  emitChange('authchange');

  return {
    ok: true,
    user,
  };
};

export const signOutUser = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(CURRENT_USER_KEY);
  emitChange('authchange');
};

export const getCart = () => readJson(CART_KEY, []);

const saveCart = (cart) => {
  writeJson(CART_KEY, cart);
  emitChange('cartchange');
  return cart;
};

export const getCartCount = () =>
  getCart().reduce((total, item) => total + item.quantity, 0);

export const parsePrice = (price) => Number(price.replace(/[^0-9.]/g, '')) || 0;

export const formatCurrency = (value) =>
  `PHP ${value.toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export const getCartSubtotal = () =>
  getCart().reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);

export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.name === product.name);
  const updatedCart = existingItem
    ? cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [
        ...cart,
        {
          name: product.name,
          title: product.title,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: 1,
        },
      ];

  return saveCart(updatedCart);
};

export const updateCartItemQuantity = (productName, quantity) => {
  const cart = getCart();

  if (quantity <= 0) {
    return saveCart(cart.filter((item) => item.name !== productName));
  }

  return saveCart(
    cart.map((item) =>
      item.name === productName
        ? { ...item, quantity }
        : item,
    ),
  );
};

export const removeFromCart = (productName) =>
  saveCart(getCart().filter((item) => item.name !== productName));

export const clearCart = () => saveCart([]);
