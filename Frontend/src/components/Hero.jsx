import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-16 gap-12">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          It Doesn’t Just <span className="text-blue-400">Suggest Code.</span>
          <br className="hidden md:block" /> It <span className="text-green-400">Builds It.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-md">
          Your all-in-one AI coding agent that turns simple prompts into fully functional code. Whether you're building components, fixing bugs, or scaffolding entire projects, it understands context, adapts to your style, and boosts your workflow.
        </p>
      </div>
      {/* Right Column: 2x2 Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5 w-full max-w-xs aspect-square">
        <div className="bg-orange-500 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md">
          <span role="img" aria-label="Lightning">⚡</span>
        </div>
        <div className="bg-pink-600 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md">
          <span role="img" aria-label="Rocket">🚀</span>
        </div>
        <div className="bg-green-500 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md">
          <span role="img" aria-label="Robot">🤖</span>
        </div>
        <div className="bg-blue-600 rounded-xl flex items-center justify-center aspect-square text-5xl shadow-md">
          <span role="img" aria-label="Code">💻</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
