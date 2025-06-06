import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/illustrations/Logo.png';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setShowLogin(true);
  };
  const handleTryFree = () => {
    alert('Try it for Free button clicked!');
  };
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <nav className="bg-black text-white px-8 py-6 flex items-center w-full justify-between">
        <span className="flex items-center gap-3">
          <img src={logo} alt="CodeShiftAI Logo" className="w-20 h-20 object-contain" />
          <span className="text-2xl font-extrabold">CodeShiftAI</span>
        </span>
        <div className="flex gap-3">
          <a href="#docs" className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Docs</a>
          <button onClick={() => navigate('/about')} className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">About</button>
          <button onClick={() => navigate('/pricing')} className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Pricing</button>
          <button onClick={handleLogin} className="px-5 py-2 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-200 transition text-sm">Login</button>
          <button onClick={handleTryFree} className="px-5 py-2 rounded-md bg-gray-800 text-white font-semibold shadow-sm hover:bg-gray-700 transition text-sm border border-gray-700">Try it for Free</button>
        </div>
      </nav>
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
            <button onClick={handleCloseLogin} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
            <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>
            <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" autoComplete="username" />
              <input type="password" placeholder="Password" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" autoComplete="current-password" />
              <button type="submit" className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Login</button>
            </form>
            <div className="mt-4 text-center">
              <button className="text-blue-600 hover:underline font-medium">Create Account</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;