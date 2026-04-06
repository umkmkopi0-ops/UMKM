import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { locales } from './locales';
import Home from './pages/Home';
import Explore from './pages/Explore';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleLang = () => setLang(l => (l === 'en' ? 'id' : 'en'));
  const closeMenu = () => setIsMobileMenuOpen(false);
  const t = locales[lang];

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050505] text-stone-300 font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">
        
        {/* NAVBAR */}
        <nav className="fixed w-full z-50 py-4 md:py-6 px-6 md:px-8 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
          <Link to="/" onClick={closeMenu}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-serif text-amber-500 tracking-[0.2em] uppercase cursor-pointer relative z-50"
            >
              HelcoBali
            </motion.div>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-stone-400 font-medium">
            <a href="/#story" className="hover:text-[#d4af37] hover:-translate-y-0.5 transition-all duration-300">{t.nav.story}</a>
            <a href="/#outlets" className="hover:text-[#d4af37] hover:-translate-y-0.5 transition-all duration-300">{t.nav.locations}</a>
            <a href="/#contact" className="hover:text-[#d4af37] hover:-translate-y-0.5 transition-all duration-300">{t.nav.contact}</a>
            <button 
              onClick={toggleLang} 
              className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-full hover:border-[#d4af37]/50 hover:text-[#d4af37] transition-all"
            >
              <Globe size={14} />
              <span>{t.nav.langToggle}</span>
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-amber-500 p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center"
            >
              <button 
                onClick={closeMenu}
                className="absolute top-4 right-6 text-stone-400 hover:text-amber-500 p-2"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col items-center gap-8 text-sm md:text-lg tracking-[0.2em] uppercase text-stone-300 font-medium w-full px-8 text-center mt-12">
                <a href="/#story" onClick={closeMenu} className="hover:text-amber-500 w-full py-4 border-b border-white/5 transition-colors">{t.nav.story}</a>
                <a href="/#outlets" onClick={closeMenu} className="hover:text-amber-500 w-full py-4 border-b border-white/5 transition-colors">{t.nav.locations}</a>
                <a href="/#contact" onClick={closeMenu} className="hover:text-amber-500 w-full py-4 border-b border-white/5 transition-colors">{t.nav.contact}</a>
                <Link to="/explore" onClick={closeMenu} className="hover:text-amber-500 w-full py-4 border-b border-white/5 transition-colors">{t.hero.btn}</Link>
                
                <div className="w-12 h-px bg-amber-500/30 my-4"></div>

                <button 
                  onClick={() => { toggleLang(); closeMenu(); }} 
                  className="flex items-center gap-3 border border-amber-500/30 text-amber-500 px-6 py-3 rounded-full active:bg-amber-500 active:text-black transition-all"
                >
                  <Globe size={18} />
                  <span>{lang === 'en' ? 'ID (Bahasa)' : 'EN (English)'}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/explore" element={<Explore t={t} />} />
        </Routes>

        {/* FOOTER */}
        <footer className="py-12 bg-black border-t border-white/5 relative z-10 w-full text-center md:text-left">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-amber-500 font-serif text-xl tracking-[0.2em] uppercase font-medium">
              HelcoBali
            </div>
            <p className="text-stone-600 text-[10px] md:text-xs uppercase tracking-widest font-light leading-relaxed max-w-sm md:max-w-none mx-auto md:mx-0">
              &copy; {new Date().getFullYear()} {t.footer}
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}