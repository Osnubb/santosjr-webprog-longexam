import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="flex flex-col gap-2">
          <NavLink to="/" className="text-xl font-bold text-zinc-50 hover:text-zinc-200 transition">
            BulldogEx Shop
          </NavLink>
          <p className="text-sm text-zinc-400">Campus essentials, simple ordering. All rights reserved © 2024.</p>
        </div>
        
        <nav className="flex flex-wrap gap-4 text-sm sm:gap-6">
          <NavLink to="/" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Home</NavLink>
          <NavLink to="/products" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Products</NavLink>
          <NavLink to="/dashboard" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Dashboard</NavLink>
          <NavLink to="/cart" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Cart</NavLink>
          <NavLink to="/about" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">About</NavLink>
          <NavLink to="/auth/signin" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Sign In</NavLink>
          <NavLink to="/auth/signup" className="text-zinc-300 hover:text-zinc-100 transition uppercase tracking-wide font-medium">Sign Up</NavLink>
        </nav>

        <div className="flex gap-4 text-zinc-400">
          <a href="#" className="hover:text-zinc-200 transition">Facebook</a>
          <a href="#" className="hover:text-zinc-200 transition">Instagram</a>
          <a href="#" className="hover:text-zinc-200 transition">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer

