import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import FilterBar from './FilterBar';
import GalleryCard from './GalleryCard';
import { GALLERY_ITEMS } from './data';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");

  // Filter logic
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === "All Events" ? true : item.category === activeCategory
  );

  return (
    <section className="min-h-screen bg-white py-16 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <GalleryHeader />
        
        <FilterBar 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-6 lg:px-8">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No events found for this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;