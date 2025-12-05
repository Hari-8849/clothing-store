import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Play, Upload, Video } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Link } from 'react-router-dom';

export const Home = () => {
  const newArrivals = PRODUCTS.filter(p => p.newArrival).slice(0, 4);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Default to local file "hero.mp4" in the public folder.
  // If not found, handleVideoError will switch it to the online backup.
  const [videoSrc, setVideoSrc] = useState("/hero.mp4");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
      // Small timeout to ensure DOM is ready for play() after src change
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video autoplay failed (likely browser policy or loading error):", error);
        });
      }
    }
  }, [videoSrc]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  const handleVideoError = () => {
    // Fallback protection: if local hero.mp4 is missing, use the online version
    if (videoSrc === "/hero.mp4") {
      console.warn("Local hero.mp4 not found in public folder, reverting to online video.");
      setVideoSrc("https://videos.pexels.com/video-files/5302635/5302635-uhd_3840_2160_25fps.mp4");
    }
  };

  return (
    <div className="w-full">
      {/* Cinematic Hero */}
      <section className="relative h-screen w-full overflow-hidden group">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full bg-black">
           {/* key={videoSrc} forces re-render when source changes to ensure proper loading */}
           <video 
             key={videoSrc} 
             ref={videoRef}
             autoPlay 
             loop 
             muted 
             playsInline 
             onError={handleVideoError}
             className="w-full h-full object-cover opacity-60"
           >
             <source src={videoSrc} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-black/30" />

        {/* Local Video Upload Button (Hidden by default, visible on hover) */}
        <div className="absolute bottom-6 right-6 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <input 
            type="file" 
            accept="video/*" 
            ref={fileInputRef} 
            onChange={handleVideoUpload} 
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
            title="Upload local video"
          >
            <Video size={16} />
            <span>Change Video</span>
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 text-accent">
              Spring / Summer 2025
            </h2>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-white mb-8 leading-tight tracking-tight mix-blend-overlay">
              BEYOND <br /> REALITY
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-6 mt-8"
          >
            <Link to="/shop" className="px-8 py-3 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-accent transition-colors">
              Shop Collection
            </Link>
            <button className="px-8 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
              View Campaign
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
             <h3 className="font-serif text-3xl md:text-5xl mb-4">New Arrivals</h3>
             <p className="text-gray-400 max-w-md">Curated pieces for the modern avant-garde aesthetic.</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, index) => (
             <motion.div
               key={product.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
               <ProductCard product={product} />
             </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center md:hidden">
            <Link to="/shop" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors">
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Categories / Collections Parallax */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[1920px] mx-auto px-6">
           {/* Auto-flowing grid for collections, fixed height per item */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {CATEGORIES.map((cat) => (
               <Link to="/shop" key={cat.id} className="relative group overflow-hidden h-[50vh] block">
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                 <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                 />
                 <div className="absolute bottom-10 left-10 z-20">
                   <h3 className="font-serif text-3xl md:text-4xl text-white italic group-hover:translate-x-2 transition-transform duration-500">{cat.name}</h3>
                   <span className="text-xs text-accent uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">Explore Category</span>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-6 md:px-24 bg-primary text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-8">The Philosophy</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            "We do not design for the moment. <br/> We design for the <span className="italic text-gray-400">identity</span>."
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            AURA bridges the gap between luxury craft and street utility. Born in the shadows of the metropolis, defined by precision, silence, and presence.
          </p>
          <div className="mt-12 font-serif text-4xl italic text-gray-600">
            Aura Studios
          </div>
        </motion.div>
      </section>

      {/* Editorial / "More from Brand" Slider mockup */}
      <section className="py-24 px-6 overflow-hidden">
        <h3 className="font-serif text-3xl mb-12 ml-6 md:ml-12">Campaign: Void Walker</h3>
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar px-6 md:px-12 snap-x">
          {[
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1550614000-4b9519e0037a?auto=format&fit=crop&q=80&w=800'
          ].map((url, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[600px] aspect-video bg-gray-900 relative snap-center group cursor-pointer">
              <img src={url} alt="Campaign" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <Play fill="white" className="ml-1" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};