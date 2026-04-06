import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Coffee, Droplets, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Explore({ t }) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link to="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-500 transition-colors mb-16 uppercase tracking-[0.2em] text-xs font-semibold">
        <ArrowLeft size={16} />
        <span>{t.explore.labels.back}</span>
      </Link>

      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mb-24 text-center">
        <motion.span variants={fadeUp} className="text-amber-500 tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">{t.explore.subtitle}</motion.span>
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-white mb-6">{t.explore.title}</motion.h1>
        <motion.p variants={fadeUp} className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">{t.explore.desc}</motion.p>
      </motion.div>

      <div className="space-y-32">
        {t.explore.products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/5] bg-white overflow-hidden relative flex items-center justify-center p-8 lg:p-12 shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 w-full h-full object-contain filter contrast-[1.05] group-hover:scale-105 transition-transform duration-[2s]" 
                />
              </div>
              
              {/* Product Price Tag */}
              <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-amber-500 text-black px-6 py-4 font-semibold text-sm uppercase tracking-widest shadow-xl z-20">
                {product.price}
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left">
              <span className="text-amber-500 text-xs tracking-[0.2em] uppercase font-bold">{product.roast}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8">{product.name}</h2>
              
              <p className="text-stone-400 text-lg leading-relaxed font-light mb-10 pb-10 border-b border-white/10">
                {product.desc}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-stone-500 text-xs uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                    <MapPin size={14} /> {t.explore.labels.origin}
                  </h4>
                  <p className="text-stone-200 font-medium">{product.origin}</p>
                </div>
                <div>
                  <h4 className="text-stone-500 text-xs uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                    <Coffee size={14} /> {t.explore.labels.notes}
                  </h4>
                  <p className="text-stone-200 font-medium">{product.notes}</p>
                </div>
              </div>

              <a href="/#outlets" className="inline-block mt-4">
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 border border-amber-500/50 text-amber-500 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors cursor-pointer"
                >
                  <MapPin size={14} />
                  <span>{t.explore.labels.orderBtn}</span>
                </motion.div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
