import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/pricing/');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching pricing plans:', error);
      }
    };

    fetchPricingPlans();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen py-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">Pricing Plans</h1>
      <div className="flex justify-center gap-10">
        <div className="bg-gray-800 shadow-md rounded-lg p-6 w-80">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Basic Plan</h2>
          <p className="text-gray-400 mb-4">Perfect for individuals starting out.</p>
          <p className="text-3xl font-bold mb-4 text-blue-400">$10/month</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Choose Plan</button>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 w-80">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Pro Plan</h2>
          <p className="text-gray-400 mb-4">Ideal for professionals and teams.</p>
          <p className="text-3xl font-bold mb-4 text-blue-400">$30/month</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Choose Plan</button>
        </div>
        <div className="bg-gray-800 shadow-md rounded-lg p-6 w-80">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Enterprise Plan</h2>
          <p className="text-gray-400 mb-4">Best for large organizations.</p>
          <p className="text-3xl font-bold mb-4 text-blue-400">$100/month</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
