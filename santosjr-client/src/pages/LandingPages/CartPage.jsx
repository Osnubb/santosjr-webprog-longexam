import { useEffect, useMemo, useState } from 'react';
import Button from '../../components/Button.jsx';
import {
  clearCart,
  formatCurrency,
  getCart,
  getCartSubtotal,
  getCurrentUser,
  removeFromCart,
  updateCartItemQuantity,
} from '../../utils/store.js';

const paymentMethods = [
  {
    id: 'cod',
    label: 'Cash on Pickup',
    description: 'Pay when you claim your order on campus.',
  },
  {
    id: 'gcash',
    label: 'GCash',
    description: 'Use a mobile wallet option for a familiar checkout flow.',
  },
  {
    id: 'card',
    label: 'Credit / Debit Card',
    description: 'A marketplace-style option for card payments.',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(() => getCart());
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [orderMessage, setOrderMessage] = useState('');
  const currentUser = getCurrentUser();

  useEffect(() => {
    const syncCart = () => {
      setCartItems(getCart());
    };

    window.addEventListener('cartchange', syncCart);
    window.addEventListener('storage', syncCart);

    return () => {
      window.removeEventListener('cartchange', syncCart);
      window.removeEventListener('storage', syncCart);
    };
  }, []);

  const subtotal = useMemo(() => getCartSubtotal(), [cartItems]);
  const serviceFee = cartItems.length > 0 ? 35 : 0;
  const total = subtotal + serviceFee;

  const handleQuantityChange = (productName, nextQuantity) => {
    updateCartItemQuantity(productName, nextQuantity);
    setOrderMessage('');
  };

  const handleRemoveItem = (productName) => {
    removeFromCart(productName);
    setOrderMessage('');
  };

  const handleClearCart = () => {
    clearCart();
    setOrderMessage('');
  };

  const handlePlaceOrder = () => {
    if (!cartItems.length) {
      setOrderMessage('Your cart is empty. Add a product first before placing an order.');
      return;
    }

    const paymentLabel = paymentMethods.find((method) => method.id === selectedPayment)?.label;
    clearCart();
    setOrderMessage(`Order placed. Payment method: ${paymentLabel}. Prepare for campus pickup.`);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Cart
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Review your items and choose a payment method
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/products">Continue Shopping</Button>
          <Button to="/" variant="primary">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Cart Items
              </p>

              {cartItems.length ? (
                <div className="mt-5 space-y-4">
                  {cartItems.map((item) => (
                    <article
                      key={item.name}
                      className="grid gap-4 rounded-[1.5rem] border-2 border-zinc-900 bg-zinc-50 p-4 sm:grid-cols-[7rem_1fr]"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="aspect-square w-full rounded-[1.25rem] border-2 border-zinc-900 object-cover"
                      />

                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-semibold text-zinc-900">{item.title}</h2>
                            <p className="mt-1 text-sm text-zinc-600">{item.price}</p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.name)}
                            className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Quantity
                          </span>
                          <div className="inline-flex items-center rounded-full border-2 border-zinc-900 bg-zinc-100">
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.name, item.quantity - 1)}
                              className="px-4 py-2 text-sm font-semibold text-zinc-900"
                            >
                              -
                            </button>
                            <span className="min-w-10 text-center text-sm font-semibold text-zinc-900">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleQuantityChange(item.name, item.quantity + 1)}
                              className="px-4 py-2 text-sm font-semibold text-zinc-900"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-5 rounded-[1.5rem] border-2 border-dashed border-zinc-300 bg-zinc-50 p-6">
                  <h2 className="text-lg font-semibold text-zinc-900">Your cart is still empty</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Add products first, then come back here to review your order details.
                  </p>
                </div>
              )}

              {cartItems.length ? (
                <button
                  type="button"
                  onClick={handleClearCart}
                  className="mt-5 text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
                >
                  Clear Cart
                </button>
              ) : null}
            </div>

            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Payment Method
              </p>
              <div className="mt-5 grid gap-4">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`rounded-[1.5rem] border-2 p-4 transition ${
                      selectedPayment === method.id
                        ? 'border-zinc-900 bg-zinc-50'
                        : 'border-zinc-300 bg-zinc-100'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="payment-method"
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="mt-1 h-4 w-4 accent-zinc-900"
                      />
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{method.label}</p>
                        <p className="mt-1 text-sm leading-6 text-zinc-600">{method.description}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Order Summary
              </p>
              <div className="mt-5 space-y-3 text-sm text-zinc-700">
                <div className="flex items-center justify-between gap-4">
                  <span>Items Total</span>
                  <span className="font-semibold text-zinc-900">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Service Fee</span>
                  <span className="font-semibold text-zinc-900">{formatCurrency(serviceFee)}</span>
                </div>
                <div className="border-t-2 border-zinc-900 pt-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-zinc-900">Total</span>
                    <span className="text-lg font-bold text-zinc-900">{formatCurrency(total)}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className="mt-6 w-full rounded-2xl py-3 text-[11px] tracking-[0.2em]"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>

              {orderMessage ? (
                <p className="mt-4 text-sm font-medium text-zinc-700">{orderMessage}</p>
              ) : null}
            </div>

            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Pickup Details
              </p>
              <h2 className="mt-3 text-lg font-semibold text-zinc-900">
                {currentUser ? `Order for ${currentUser.firstName} ${currentUser.lastName}` : 'Guest checkout preview'}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Browse online, choose your item, and prepare for campus pickup.
              </p>
              <div className="mt-4 rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-50 p-4">
                <p className="text-sm font-semibold text-zinc-900">Suggested Pickup Window</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Weekdays, 1:00 PM to 5:00 PM at the campus merchandise desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
