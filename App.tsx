import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Shop } from './pages/Shop';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-primary min-h-screen text-offwhite font-sans selection:bg-accent selection:text-black">
        <Navbar />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
