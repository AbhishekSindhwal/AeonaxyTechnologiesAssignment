import React from 'react'

const Card = ({ logo, heading, text, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-10 mb-6 text-gray-600 hover:bg-slate-600 hover:text-white">
      <img src={logo} alt="Logo" className="w-f mt-3 h-16 mb-8" />
      <h3 className="text-lg font-bold mb-2">{heading}</h3>
      <p className=" mb-4">{text}</p>
      <a href={link} className="text-blue-500 hover:underline">Learn More</a>
    </div>
  );
}
export default Card