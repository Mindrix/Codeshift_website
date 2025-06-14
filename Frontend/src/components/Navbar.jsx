import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/illustrations/Logo.png';
import axios from 'axios';
import styles from "./Navbar.module.css"

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [registerError, setRegisterError] = useState('');
<<<<<<< HEAD
=======
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
>>>>>>> deep
    const navigate = useNavigate();

    const handleLogin = () => {
        setShowLogin(true);
    };    const handleTryFree = () => {
        navigate('/signup');
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
        setLoginError('');
    };

    // Login authentication
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:8000/accounts/login/', { email, password });
            alert('Login successful!');
            setIsLoggedIn(true);
            setLoginError('');
            setShowLogin(false);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setLoginError('Email not registered. Please create an account.');
            } else {
                setLoginError('Invalid email or password. Please try again.');
            }
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await axios.post('http://localhost:8000/accounts/signup/', { username, email, password });
            alert('Registration successful! You can now log in.');
            setShowRegister(false);
            setRegisterError('');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setRegisterError('Username or email already registered. Please try again.');
            } else {
                setRegisterError('Error during registration. Please try again.');
            }
            console.error('Signup failed:', error.response ? error.response.data : error.message);
        }
    };

    const handleOpenRegister = () => {
        setShowRegister(true);
        setRegisterError('');
    };

    return (
<<<<<<< HEAD
        <>
            <nav className="bg-black text-white px-8 py-6 flex items-center w-full justify-between">
                <span className="flex items-center gap-3">
                    <img src={logo} alt="CodeShiftAI Logo" className={`${styles.nav} w-20 h-20 object-contain`} />
                    <span className={`${styles.nav} text-2xl font-extrabold`}>CodeShiftAI</span>
                </span>
                <div className="flex gap-3">
                    <a href="#docs" className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Docs</a>
                    <button onClick={() => navigate('/about')} className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">About</button>
                    <button onClick={() => navigate('/pricing')} className="px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-sm">Pricing</button>
                    {!isLoggedIn && <button onClick={handleLogin} className="px-5 py-2 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-200 transition text-sm">Login</button>}
                    <button onClick={handleTryFree} className="px-5 py-2 rounded-md bg-gray-800 text-white font-semibold shadow-sm hover:bg-gray-700 transition text-sm border border-gray-700">Try it for free</button>
                </div>
            </nav>
            {showLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                        <button onClick={handleCloseLogin} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
                        <h2 className="text-2xl font-bold mb-6 text-black text-center">Login</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                            <input name="email" type="email" placeholder="Email" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" autoComplete="username" required />
                            <input name="password" type="password" placeholder="Password" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" autoComplete="current-password" required />
                            <button type="submit" className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Login</button>
                        </form>
                        <div className="mt-4 text-center">
                            <button onClick={() => setShowRegister(true)} className="text-blue-500 hover:underline font-medium">Create Account</button>
=======
        <>            <nav className="bg-black text-white px-4 sm:px-6 md:px-8 py-4 md:py-6 w-full">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <span className="flex items-center gap-2 md:gap-3">
                        <img src={logo} alt="CodeShiftAI Logo" className={`${styles.nav} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain`} />
                        <span className={`${styles.nav} text-lg sm:text-xl md:text-2xl font-extrabold`}>CodeShiftAI</span>
                    </span>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                        <a href="#docs" className="px-3 xl:px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-xs xl:text-sm">Docs</a>
                        <button onClick={() => navigate('/about')} className="px-3 xl:px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-xs xl:text-sm">About</button>
                        <button onClick={() => navigate('/pricing')} className="px-3 xl:px-5 py-2 rounded-full border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-xs xl:text-sm">Pricing</button>
                        {!isLoggedIn && <button onClick={handleLogin} className="px-3 xl:px-5 py-2 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-200 transition text-xs xl:text-sm">Login</button>}
                        <button onClick={handleTryFree} className="px-3 xl:px-5 py-2 rounded-md bg-gray-800 text-white font-semibold shadow-sm hover:bg-gray-700 transition text-xs xl:text-sm border border-gray-700">Try it for free</button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden flex flex-col gap-1 p-2"
                        aria-label="Toggle mobile menu"
                    >
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                    </button>
                </div>
                
                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pt-4 pb-2 flex flex-col gap-2">
                        <a href="#docs" className="px-4 py-3 rounded-md border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition text-center">Docs</a>
                        <button onClick={() => {navigate('/about'); setMobileMenuOpen(false);}} className="px-4 py-3 rounded-md border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition">About</button>
                        <button onClick={() => {navigate('/pricing'); setMobileMenuOpen(false);}} className="px-4 py-3 rounded-md border border-gray-700 text-white font-medium bg-transparent hover:bg-gray-900 transition">Pricing</button>
                        {!isLoggedIn && <button onClick={() => {handleLogin(); setMobileMenuOpen(false);}} className="px-4 py-3 rounded-md bg-white text-black font-semibold shadow-sm hover:bg-gray-200 transition">Login</button>}
                        <button onClick={() => {handleTryFree(); setMobileMenuOpen(false);}} className="px-4 py-3 rounded-md bg-gray-800 text-white font-semibold shadow-sm hover:bg-gray-700 transition border border-gray-700">Try it for free</button>
                    </div>
                </div>
            </nav>            {showLogin && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-sm sm:max-w-md relative">
                        <button onClick={handleCloseLogin} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl sm:text-2xl">&times;</button>
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black text-center">Login</h2>
                        <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleLoginSubmit}>
                            <input name="email" type="email" placeholder="Email" className="px-3 sm:px-4 py-2 sm:py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm sm:text-base" autoComplete="username" required />
                            <input name="password" type="password" placeholder="Password" className="px-3 sm:px-4 py-2 sm:py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm sm:text-base" autoComplete="current-password" required />
                            <button type="submit" className="bg-black text-white py-2 sm:py-3 rounded font-semibold hover:bg-gray-900 transition text-sm sm:text-base">Login</button>
                        </form>
                        <div className="mt-3 sm:mt-4 text-center">
                            <button onClick={() => setShowRegister(true)} className="text-blue-500 hover:underline font-medium text-sm sm:text-base">Create Account</button>
>>>>>>> deep
                        </div>
                        {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}
                    </div>
                </div>
            )}
            {showRegister && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm relative">
                        <button onClick={() => setShowRegister(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl">&times;</button>
                        <h2 className="text-2xl font-bold mb-6 text-black text-center">Register</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                            <input name="username" type="text" placeholder="Username" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" required />
                            <input name="email" type="email" placeholder="Email" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" required />
                            <input name="password" type="password" placeholder="Password" className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" required />
                            <button type="submit" className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-900 transition">Register</button>
                        </form>
                        {registerError && <p className="text-red-500 text-sm mt-2">{registerError}</p>}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;