import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {  
  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      <Navbar />        <Hero 
        buttonText="Try it for free"
        buttonLink="https://marketplace.visualstudio.com/items?itemName=Mindrix.codeshiftai"
        buttonStyle="primary"
      />
    </div>
  );
};

export default Home;