
import React from 'react';
const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-12 flex mb-6 items-center">
      <div className="max-w-lg mx-auto px-6">
        <div className="mb-4">
          <h3 className="text-lg mb-4 font-medium text-gray-600">Home / Product / Integration</h3>
          <h2 className="mb-2">App & Integrations</h2>
          <p className="text-3xl font-bold ">Integrate Calendly</p>
          <p className="text-3xl font-bold mb-6">Boost productivity</p>
          <p className="text-sm text-gray-600">Smart scheduling automation will change the way you- and your tools-work
          </p>
        </div>
        <div className="relative">
          <input type="text" className="absolute left-0 w-full border border-gray-300 rounded-3xl px-10 py-2 pl-14" placeholder="Search..." /> {/* Adjusted the padding and added left padding for the search icon */}
           {/* Positioned the search icon */}
        </div>
      </div>
      <div className="max-w-lg mx-auto px-6 py-10 md:p-2 hidden md:block">
        <div className='relative w-60 h-60 mx-auto'>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-blue-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-gradient-to-br from-blue-200 to-blue-500 rounded-full"></div> {/* Adjusted the size of the inner circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-600 rounded-full flex justify-center items-center"> {/* Adjusted the size of the innermost circle and added flexbox */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;

