import React from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      'Basic code suggestions',
      'Limited project scaffolding',
      'Community support',
    ],
    button: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$19/mo',
    features: [
      'Advanced code generation',
      'Bug fixing & refactoring',
      'Priority email support',
      'Unlimited projects',
    ],
    button: 'Upgrade',
  },
  {
    name: 'Advanced',
    price: '$49/mo',
    features: [
      'All Professional features',
      'Team collaboration',
      'AI code reviews',
      'Dedicated support',
    ],
    button: 'Go Advanced',
  },
];

const Pricing = () => (
  <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-16 px-4">
    <h1 className="text-4xl font-extrabold mb-10">Pricing Plans</h1>
    <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-5xl">
      {plans.map((plan) => (
        <div key={plan.name} className="bg-gray-900 rounded-xl shadow-lg p-8 flex-1 flex flex-col items-center border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
          <div className="text-3xl font-extrabold mb-4 text-blue-400">{plan.price}</div>
          <ul className="mb-6 space-y-2 text-gray-300">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-400">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button className="mt-auto px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">{plan.button}</button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;
