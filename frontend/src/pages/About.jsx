import React from 'react';
import logo from '../assets/illustrations/Logo.png';

const About = () => (
  <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-12 px-4">
    <div className="w-full flex justify-start mb-4">
      <span className="text-blue-400 text-lg font-bold tracking-wide bg-gray-900 px-4 py-2 rounded shadow border border-blue-400 ml-2 mt-2">ABOUT US</span>
    </div>
    <header className="flex flex-col items-center mb-10">
      <img src={logo} alt="CodeShiftAI Logo" className="w-24 h-24 object-contain mb-4" />
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">CodeShiftAI: Innovation in AI Coding Agents</h1>
      <p className="text-lg text-gray-300 mt-2 text-center max-w-2xl">
        We are dedicated to revolutionizing the way developers build software. CodeShiftAI is an all-in-one AI coding agent that turns simple prompts into fully functional code, adapts to your style, and boosts your workflow with context-aware suggestions and automation.
      </p>
    </header>
    <section className="max-w-2xl w-full mb-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-400 tracking-wide">Our Mission</h2>
      <p className="text-lg text-gray-300 mb-4">
        Our mission is to empower developers and teams to build faster, smarter, and with more creativity. Whether you need to scaffold projects, fix bugs, or generate components, CodeShiftAI is designed to understand your needs and deliver results efficiently.
      </p>
      <div className="bg-gradient-to-r from-blue-600 to-green-400 text-black font-bold text-lg rounded-lg px-6 py-4 mb-4 shadow-lg border-2 border-blue-400">
        "It doesn’t just suggest code. It builds it."
      </div>
    </section>
    <section className="max-w-3xl w-full">
      <h2 className="text-2xl font-bold mb-4 text-blue-400 tracking-wide">What Makes Us Unique?</h2>
      <ul className="list-disc pl-6 text-gray-300 space-y-2">
        <li>Context-aware code generation and bug fixing</li>
        <li>Modern, beautiful UI powered by React and Tailwind CSS</li>
        <li>Seamless integration for both beginners and professionals</li>
        <li>Focus on productivity, creativity, and developer happiness</li>
      </ul>
    </section>
    {/* Contact Us in bottom right */}
    <div className="fixed bottom-2 right-4 z-50 flex flex-col items-end">
      <div className="bg-black/80 text-gray-300 px-4 py-2 rounded-t-lg shadow-lg font-bold text-base min-w-48 max-w-xs text-right leading-tight">Contact Us</div>
      <a href="mailto:Mindrix25@gmail.com" className="bg-black/80 text-gray-400 px-4 py-1 shadow-lg font-semibold hover:text-blue-400 transition text-sm min-w-48 max-w-xs text-right rounded-b-none whitespace-nowrap overflow-x-auto">
        Mindrix25@gmail.com
      </a>
      <a href="https://www.linkedin.com/company/mindrix1" target="_blank" rel="noopener noreferrer" className="bg-black/80 text-blue-400 px-4 py-1 rounded-b-lg shadow-lg font-semibold hover:text-blue-300 transition text-sm min-w-48 max-w-xs text-right border-t border-gray-800 -mt-1 whitespace-nowrap overflow-x-auto">
        LinkedIn: /mindrix1
      </a>
    </div>
  </div>
);

export default About;
