import React from 'react';
import logo from '../assets/illustrations/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-6 flex items-center w-full justify-between">
      <span className="flex items-center gap-3">
        <img src={logo} alt="CodeShiftAI Logo" className="w-20 h-20 object-contain" />
        <span className="text-2xl font-extrabold">CodeShiftAI</span>
      </span>
      <div className="flex gap-3">
        <a href="#docs" className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Docs</a>
        <a href="#about" className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">About</a>
        <a href="#pricing" className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Pricing</a>
        <button className="px-5 py-2 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-200 transition text-sm">Login</button>
        <button className="px-5 py-2 rounded-md bg-gray-800 text-white font-semibold shadow-sm hover:bg-gray-700 transition text-sm border border-gray-700">Try it for Free</button>
      </div>
    </nav>
  );
};

export default Navbar;