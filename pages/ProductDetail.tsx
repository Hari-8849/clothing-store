import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import { PRODUCTS } from '../constants';
import { Star, Truck, ShieldCheck, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addToCart, toggleCart } = useStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('desc');

  if (!product) return <div className="h-screen flex items-center justify-center">Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    toggleCart(); // Open cart automatically
  };

  return (
    <div className="pt-24 min-h-screen bg-primary pb-24">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left - Image Gallery (Scrollable) */}
          <div className="lg:w-[60%] flex flex-col gap-1 px-1 lg:px-4">
            {product.images.map((img, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={idx} 
                className="w-full h-[80vh] md:h-[100vh] bg-secondary relative overflow-hidden group cursor-zoom-in"
              >
                <img 
                  src={img} 
                  alt={`${product.name} ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>

          {/* Right - Product Details (Sticky) */}
          <div className="lg:w-[40%] px-6 lg:px-16 py-12 lg:sticky lg:top-24 h-fit">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">AURA Essential</span>
                  <div className="h-[1px] w-10 bg-accent/50"></div>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2">{product.name}</h1>
                <p className="text-xl md:text-2xl text-gray-300">${product.price}</p>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex justify-between mb-3 text-sm">
                   <span className="text-gray-400 uppercase tracking-wider">Select Size</span>
                   <button className="text-white underline decoration-accent decoration-1 underline-offset-4">Size Guide</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 border transition-all duration-300 flex items-center justify-center uppercase font-medium text-sm
                        ${selectedSize === size 
                          ? 'bg-white text-black border-white' 
                          : 'bg-transparent text-gray-400 border-white/20 hover:border-white'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`w-full py-4 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300
                  ${selectedSize 
                    ? 'bg-accent text-black hover:bg-white' 
                    : 'bg-charcoal text-gray-500 cursor-not-allowed'}`}
              >
                {selectedSize ? 'Add to Bag' : 'Select a Size'}
              </button>

              {/* Micro-infos */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-wider">
                  <Truck size={16} /> Free Worldwide Shipping
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-xs uppercase tracking-wider">
                  <ShieldCheck size={16} /> Authenticity Guaranteed
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                 {/* Description */}
                 <div className="border-b border-white/10 pb-4">
                    <button 
                      className="w-full flex justify-between items-center text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors"
                      onClick={() => setActiveAccordion(activeAccordion === 'desc' ? null : 'desc')}
                    >
                      Description
                      <motion.div animate={{ rotate: activeAccordion === 'desc' ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === 'desc' && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <p className="pt-4 text-gray-400 leading-relaxed font-light">{product.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
                 
                 {/* Composition */}
                 <div className="border-b border-white/10 pb-4">
                    <button 
                      className="w-full flex justify-between items-center text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors"
                      onClick={() => setActiveAccordion(activeAccordion === 'comp' ? null : 'comp')}
                    >
                      Composition & Care
                      <motion.div animate={{ rotate: activeAccordion === 'comp' ? 180 : 0 }}>
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {activeAccordion === 'comp' && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <p className="pt-4 text-gray-400 leading-relaxed font-light">
                             Main: 100% Japanese Nylon<br/>
                             Lining: 100% Cupro<br/>
                             Hardware: Riri Zippers<br/><br/>
                             Dry Clean Only. Do not tumble dry.
                           </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
