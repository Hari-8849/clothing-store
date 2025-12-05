import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

export const Shop = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-primary px-6">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Collections</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <button 
              onClick={() => setFilter('All')}
              className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-all ${filter === 'All' ? 'border-accent text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
            >
              All
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setFilter(cat.name)}
                className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-all ${filter === cat.name ? 'border-accent text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
             <motion.div
               layout
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               key={product.id}
             >
               <ProductCard product={product} />
             </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
