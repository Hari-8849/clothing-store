import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useStore } from '../store';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, toggleCart } = useStore();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isHome && !isScrolled ? 'bg-transparent text-white' : 'bg-primary/90 backdrop-blur-md text-offwhite border-b border-white/5';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${navBackground}`}>
        <div className="max-w-[1920px] mx-auto px-6 h-24 flex items-center justify-between">
          
          {/* Left - Mobile Menu / Links */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="lg:hidden hover:text-accent transition-colors"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
            <div className="hidden lg:flex gap-8 text-sm tracking-widest uppercase font-medium">
              <Link to="/shop" className="hover:text-accent transition-colors relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/shop" className="hover:text-accent transition-colors relative group">
                Collections
                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link to="/shop" className="hover:text-accent transition-colors relative group">
                Editorial
                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="font-serif text-3xl lg:text-4xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              AURA
            </Link>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-6">
            <button className="hover:text-accent transition-colors hidden sm:block">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button 
              onClick={toggleCart} 
              className="relative hover:text-accent transition-colors"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-black">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full w-[80%] max-w-[300px] bg-primary border-r border-white/10 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl">AURA</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-6 text-xl font-light">
                 <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</Link>
                 <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Clothing</Link>
                 <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Accessories</Link>
                 <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Editorial</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
