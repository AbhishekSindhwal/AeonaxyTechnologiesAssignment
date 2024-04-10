import React from 'react';
import categories from '../dummyData/categories';

const Sidebar = () => {

  return (
    <div className="h-screen w-80 p-4 ">
      <h2 className="text-3xl font-bold mb-4">Categories</h2>
      <ul className='ml-2 mt-6 '>
        {categories.map((category, index) => (
          <li key={index} className=" text-lg p-3 hover:bg-blue-600 rounded-lg  text-slate-950 hover:text-white">
            <a href={`#${category}`} className="   ">{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
