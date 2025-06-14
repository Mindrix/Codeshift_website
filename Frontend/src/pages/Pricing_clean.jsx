import React from 'react';
import logo from '../assets/illustrations/Logo.png';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '$0',
      duration: 'forever',
      features: [
        'Basic code suggestions',
        'Up to 10 requests per day',
        'Community support',
        'Basic templates'
      ],
      isPopular: false,
      buttonText: 'Get Started',
      buttonColor: 'bg-gray-800 text-white hover:bg-gray-700'
    },
    {
      id: 2,
      name: 'Pro',
      price: '$19',
      duration: 'per month',
      features: [
        'Advanced code generation',
        'Unlimited requests',
        'Priority support',
        'Custom templates',
        'Bug fixing assistance',
        'Project scaffolding'
      ],
      isPopular: true,
      buttonText: 'Try it for free',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$99',
      duration: 'per month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      isPopular: false,
      buttonText: 'Contact Us',
      buttonColor: 'bg-green-600 text-white hover:bg-green-700'
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex justify-start mb-4">
          <span className="text-blue-400 text-sm sm:text-lg font-bold tracking-wide bg-gray-900 px-3 sm:px-4 py-2 rounded shadow border border-blue-400 ml-2 mt-2">PRICING</span>
        </div>
        
        <header className="text-center mb-12 sm:mb-16">
          <img src={logo} alt="CodeShiftAI Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-6 mx-auto" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Choose Your <span className="text-blue-400">Coding</span> Plan
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            From free experimentation to enterprise-grade solutions. Find the perfect plan for your coding needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-gray-900 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                plan.isPopular ? 'border-blue-400 shadow-blue-400/20' : 'border-gray-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${plan.buttonColor}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">
            Need something custom? We're here to help.
          </p>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contact Sales
          </button>
        </div>

        {/* Contact Us in bottom right */}
        <div className="fixed bottom-2 right-4 z-50 flex flex-col items-end">
          <div className="bg-black/80 text-gray-300 px-3 sm:px-4 py-2 rounded-t-lg shadow-lg font-bold text-sm sm:text-base min-w-40 sm:min-w-48 max-w-xs text-right leading-tight">Contact Us</div>
          <a href="mailto:Mindrix25@gmail.com" className="bg-black/80 text-gray-400 px-3 sm:px-4 py-1 shadow-lg font-semibold hover:text-blue-400 transition text-xs sm:text-sm min-w-40 sm:min-w-48 max-w-xs text-right rounded-b-none whitespace-nowrap overflow-x-auto">
            Mindrix25@gmail.com
          </a>
          <a href="https://www.linkedin.com/company/mindrix1" target="_blank" rel="noopener noreferrer" className="bg-black/80 text-blue-400 px-3 sm:px-4 py-1 rounded-b-lg shadow-lg font-semibold hover:text-blue-300 transition text-xs sm:text-sm min-w-40 sm:min-w-48 max-w-xs text-right border-t border-gray-800 -mt-1 whitespace-nowrap overflow-x-auto">
            LinkedIn: /mindrix1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
