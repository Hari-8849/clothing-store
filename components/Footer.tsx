import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24">
          <div className="space-y-6">
            <Link to="/" className="font-serif text-4xl font-bold tracking-tighter">AURA</Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Redefining the modern silhouette through luxury craftsmanship and street utility.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Outerwear</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Accessories</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Archived</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Client Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Newsletter</h4>
             <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive access.</p>
             <div className="flex border-b border-white/20 pb-2">
               <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full outline-none text-white text-sm placeholder:text-gray-600 uppercase tracking-wider" />
               <button className="text-xs font-bold uppercase tracking-widest hover:text-accent">Join</button>
             </div>
             <div className="flex gap-4 mt-8 text-gray-400">
               <Instagram size={20} className="hover:text-white cursor-pointer" />
               <Twitter size={20} className="hover:text-white cursor-pointer" />
               <Facebook size={20} className="hover:text-white cursor-pointer" />
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-gray-600">
          <p>© 2025 AURA STUDIOS. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
