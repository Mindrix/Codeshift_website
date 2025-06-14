import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {  return (
<<<<<<< HEAD
<<<<<<<< HEAD:Frontend/src/pages/Home.jsx
    <div className="min-h-screen w-full bg-black text-white">
========
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
>>>>>>>> deep:src/pages/Home.jsx
=======
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
>>>>>>> deep
      <Navbar />      <Hero 
        buttonText="Try it for free"
        buttonLink="/signup"
        buttonStyle="primary"
      />
    </div>
  );
};

export default Home;