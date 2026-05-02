import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import { getCartCount, getCurrentUser, signOutUser } from '../utils/store';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Sign In', to: '/auth/signin' },
  { label: 'Sign Up', to: '/auth/signup' },
];


const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [cartCount, setCartCount] = useState(() => getCartCount());

  useEffect(() => {
    const syncState = () => {
      setCurrentUser(getCurrentUser());
      setCartCount(getCartCount());
    };

    window.addEventListener('authchange', syncState);
    window.addEventListener('cartchange', syncState);
    window.addEventListener('storage', syncState);

    return () => {
      window.removeEventListener('authchange', syncState);
      window.removeEventListener('cartchange', syncState);
      window.removeEventListener('storage', syncState);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser();
    navigate('/');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-zinc-900">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links
            .filter((link) => (currentUser ? !['/auth/signin', '/auth/signup'].includes(link.to) : true))
            .map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
            ))}

          <NavLink
            to="/cart"
            className="ml-2 rounded-full border-2 border-zinc-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-900 transition hover:bg-zinc-50"
          >
            Cart {String(cartCount).padStart(2, '0')}
          </NavLink>

          {currentUser ? (
            <>
              <div className="rounded-full border-2 border-zinc-900 bg-zinc-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-50">
                {currentUser.firstName}
              </div>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-full border-2 border-zinc-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-900"
              >
                Sign Out
              </button>
            </>
          ) : null}
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
