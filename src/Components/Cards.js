import React from 'react';
import Card from './Card';
import Sidebar from './Sidebar';
import cardData from '../dummyData/cardData.js';


const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-content">
      <div className="md:h-screen md:w-80 p-4 md:mr-4 md:block hidden">
        {/* Sidebar content */}
        <Sidebar />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
