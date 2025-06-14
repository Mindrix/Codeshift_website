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