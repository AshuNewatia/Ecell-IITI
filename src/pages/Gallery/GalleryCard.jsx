import React from 'react';

const GalleryCard = ({ item }) => {
  return (
    <div className="group relative w-full h-64 md:h-72 cursor-pointer outline-none">
      {/* Background "Double Layer" Effect */}
      <div className="absolute inset-0 bg-gray-300 rounded-lg transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 shadow-sm border-l-4 border-blue-400"></div>
      
      {/* Main Card Container */}
      <div className="absolute inset-0 bg-black rounded-lg overflow-hidden border border-gray-800 z-10 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
        
        {/* Card Image placeholder */}
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
        />
        
        {/* Hover Info Box (Slides up from bottom) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-600/95 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
          <p className="text-gray-200 text-sm font-medium">{item.subtitle}</p>
        </div>

      </div>
    </div>
  );
};

export default GalleryCard;