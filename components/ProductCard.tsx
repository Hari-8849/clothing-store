import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block relative cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal mb-4">
        {/* Badge */}
        {product.newArrival && (
          <span className="absolute top-3 left-3 bg-white/90 text-black text-[10px] uppercase font-bold px-2 py-1 z-10 backdrop-blur-sm">
            New In
          </span>
        )}
        
        {/* Images */}
        <motion.img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        <motion.img
          src={product.images[1] || product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 scale-105 group-hover:scale-100"
        />

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 bg-gradient-to-t from-black/80 to-transparent">
             <button className="w-full h-10 bg-white text-black flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold hover:bg-accent transition-colors">
               <Plus size={14} /> View Details
             </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm font-medium text-offwhite uppercase tracking-wide group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400">${product.price}</p>
      </div>
    </Link>
  );
};
