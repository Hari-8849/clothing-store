import React from 'react';
import { X, Minus, Plus, ArrowRight } from 'lucide-react';
import { useStore } from '../store';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-secondary border-l border-white/10 z-[70] flex flex-col shadow-2xl"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <h2 className="text-xl font-serif">Shopping Bag ({cart.length})</h2>
              <button onClick={toggleCart} className="hover:text-accent transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                  <p>Your bag is empty.</p>
                  <button 
                    onClick={toggleCart}
                    className="text-white underline hover:text-accent transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <motion.div 
                    layout
                    key={`${item.id}-${item.selectedSize}`} 
                    className="flex gap-4"
                  >
                    <div className="w-24 h-32 bg-charcoal overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-offwhite">{item.name}</h3>
                          <p className="text-accent">${item.price}</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">Size: {item.selectedSize}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4 text-sm">
                           <span className="text-gray-400">Qty: {item.quantity}</span>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize)}
                          className="text-xs text-gray-500 hover:text-red-400 uppercase tracking-wider transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-secondary">
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span>Subtotal</span>
                  <span className="font-serif">${cartTotal()}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">Tax and shipping calculated at checkout.</p>
                <button className="w-full bg-offwhite text-black h-12 flex items-center justify-center gap-2 hover:bg-accent transition-colors uppercase tracking-widest text-xs font-bold">
                  Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
