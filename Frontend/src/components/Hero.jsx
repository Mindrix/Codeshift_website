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
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20 gap-8 md:gap-12 lg:gap-16">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-center lg:items-start space-y-6 md:space-y-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-4xl">
          It Doesn't Just <span className="text-blue-400">Suggest Code.</span>
          <br className="hidden sm:block" /> It <span className="text-green-400">Builds It.</span>
        </h1>        
        <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl leading-relaxed">
          Your all-in-one AI coding agent that turns simple prompts into fully functional code. Whether you're building components, fixing bugs, or scaffolding entire projects, it understands context, adapts to your style, and boosts your workflow.
        </p>
          {/* Dynamic CTA Button */}        
        <a 
          href={buttonLink}
          target={buttonLink.startsWith('http') ? '_blank' : '_self'}
          rel={buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`
            inline-flex items-center justify-center w-full sm:w-auto
            px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5
            rounded-lg md:rounded-xl font-semibold 
            text-base sm:text-lg md:text-xl
            transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95
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
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>      
      
      {/* Right Column: Responsive Grid */}
      <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 aspect-square">
          <div className={`${styles.btn} bg-orange-500 rounded-lg md:rounded-xl flex items-center justify-center aspect-square text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span role="img" aria-label="Lightning">⚡</span>
          </div>
          <div className={`${styles.btn} bg-pink-600 rounded-lg md:rounded-xl flex items-center justify-center aspect-square text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span role="img" aria-label="Rocket">🚀</span>
          </div>
          <div className={`${styles.btn} bg-green-500 rounded-lg md:rounded-xl flex items-center justify-center aspect-square text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span role="img" aria-label="Robot">🤖</span>
          </div>
          <div className={`${styles.btn} bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center aspect-square text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span role="img" aria-label="Code">💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
