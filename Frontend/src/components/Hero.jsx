import React from 'react';
import styles from "./Hero.module.css";

/**
 * Hero Component with Dynamic CTA Button
 * 
 * Props:
 * @param {string} buttonText - Text to display on the button (default: "Get Started")
 * @param {string} buttonLink - URL or path for the button link (default: "#")
 * @param {string} buttonStyle - Style variant: "primary", "secondary", or "success" (default: "primary")
 * 
 * Usage Examples:
 * <Hero /> // Uses all defaults
 * <Hero buttonText="Start Free Trial" buttonLink="/signup" buttonStyle="primary" />
 * <Hero buttonText="Learn More" buttonLink="/about" buttonStyle="secondary" />
 * <Hero buttonText="Get Started" buttonLink="/dashboard" buttonStyle="success" />
 */
const Hero = ({ 
  buttonText = "Get Started", 
  buttonLink = "#", 
  buttonStyle = "primary" 
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-16 gap-12">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          It Doesn’t Just <span className="text-blue-400">Suggest Code.</span>
          <br className="hidden md:block" /> It <span className="text-green-400">Builds It.</span>
        </h1>        <p className="text-gray-400 text-base md:text-lg max-w-md">
          Your all-in-one AI coding agent that turns simple prompts into fully functional code. Whether you're building components, fixing bugs, or scaffolding entire projects, it understands context, adapts to your style, and boosts your workflow.
        </p>
        
        {/* Dynamic CTA Button */}
        <a 
          href={buttonLink}
          className={`
            inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg
            focus:outline-none focus:ring-4 focus:ring-opacity-50
            ${buttonStyle === 'primary' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500' 
              : buttonStyle === 'secondary'
              ? 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'
              : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 focus:ring-green-500'
            }
          `}
        >
          {buttonText}
          <svg 
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
      {/* Right Column: 2x2 Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5 w-full max-w-xs aspect-square">
        <div className={`${styles.btn} bg-orange-500 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md`}>
          <span role="img" aria-label="Lightning">⚡</span>
        </div>
        <div className={`${styles.btn} bg-pink-600 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md`}>
          <span role="img" aria-label="Rocket">🚀</span>
        </div>
        <div className={` ${styles.btn} bg-green-500 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md `} >
          <span role="img" aria-label="Robot">🤖</span>
        </div>
        <div className={`${styles.btn} bg-blue-600 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md `} >
          <span role="img" aria-label="Code">💻</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
