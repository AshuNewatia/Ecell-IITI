import React from 'react';
import { CATEGORIES } from './data';

const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded font-semibold transition-all duration-300 shadow-sm
            ${activeCategory === category 
              ? 'bg-purple-600 text-black shadow-purple-500/50 transform scale-105' 
              : 'bg-purple-200 text-gray-800 hover:bg-purple-300'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;