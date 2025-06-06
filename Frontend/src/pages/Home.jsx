import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;