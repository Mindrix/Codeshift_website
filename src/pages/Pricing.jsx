import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-black min-h-screen py-8 sm:py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-blue-400">Pricing Plans</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300">Basic Plan</h2>
            <p className="text-gray-400 mb-4">Perfect for individuals starting out.</p>
            <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">$10/month</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Up to 100 AI requests per month</li>
              <li>• Basic code generation</li>
              <li>• Email support</li>
              <li>• Access to community</li>
            </ul>
            <button className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition font-semibold">Choose Plan</button>
          </div>
          
          {/* Pro Plan */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 w-full border-2 border-blue-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300">Pro Plan</h2>
            <p className="text-gray-400 mb-4">Ideal for professionals and teams.</p>
            <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">$30/month</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Unlimited AI requests</li>
              <li>• Advanced code generation</li>
              <li>• Priority support</li>
              <li>• Custom templates</li>
              <li>• Team collaboration</li>
            </ul>
            <button className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition font-semibold">Choose Plan</button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 w-full md:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-300">Enterprise Plan</h2>
            <p className="text-gray-400 mb-4">Best for large organizations.</p>
            <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">$100/month</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>• Everything in Pro</li>
              <li>• Custom integrations</li>
              <li>• Dedicated support</li>
              <li>• On-premise deployment</li>
              <li>• SLA guarantees</li>
            </ul>
            <button className="w-full bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition font-semibold">Contact Sales</button>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">Is there a free trial?</h3>
              <p className="text-gray-300">Yes, all plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-300">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
