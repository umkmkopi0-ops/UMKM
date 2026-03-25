import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Coffee, Phone, ArrowRight } from 'lucide-react';

export default function App() {
  const outlets = [
    {
      id: 1,
      name: "Bintang Supermarket",
      location: "Seminyak, Kuta, Bali",
      image: "https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?auto=format&fit=crop&w=800&q=80",
      desc: "Temukan koleksi lengkap Cold Brew kami di lorong minuman premium Bintang Supermarket."
    },
    {
      id: 2,
      name: "Uncle Joe Cafe",
      location: "Denpasar, Bali",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      desc: "Nikmati cold brew kami langsung sambil bersantai di suasana hangat Uncle Joe."
    },
    {
      id: 3,
      name: "Grand Lucky",
      location: "Sanur, Bali",
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
      desc: "Tersedia secara eksklusif di etalase artisan Grand Lucky Sanur."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === outlets.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? outlets.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === outlets.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [outlets.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fluid animations
  const floating = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const glowBreathing = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.6, 1, 0.6],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-stone-300 font-sans selection:bg-amber-500 selection:text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 py-6 px-8 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif text-amber-500 tracking-[0.2em] uppercase cursor-pointer"
        >
          HelcoBali
        </motion.div>
        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-stone-400 font-medium">
          <motion.a whileHover={{ y: -2, color: "#d4af37" }} href="#story" className="transition-colors duration-300">Our Story</motion.a>
          <motion.a whileHover={{ y: -2, color: "#d4af37" }} href="#outlets" className="transition-colors duration-300">Locations</motion.a>
          <motion.a whileHover={{ y: -2, color: "#d4af37" }} href="#contact" className="transition-colors duration-300">Contact</motion.a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax & Zoom */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
        >
          <img
            src="/hero.png"
            alt="Premium Cold Brew"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-[#050505]/60 to-[#050505]"></div>
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mt-24"
          initial="hidden" animate="visible" variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-amber-500/50"></span>
            <span className="text-amber-500 tracking-[0.4em] text-xs font-semibold uppercase">Crafted for the few</span>
            <span className="h-px w-12 bg-amber-500/50"></span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif mb-6 text-white leading-[1.1]">
            Seni Menyeduh <br /> 
            <motion.span 
              className="inline-block text-amber-500 italic font-light drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Waktu.
            </motion.span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md">
            Eksklusif. Terbatas. Kami mendedikasikan 18 jam untuk setiap tetesnya demi menjaga profil rasa yang sempurna dan tak tertandingi.
          </motion.p>

          <motion.button 
            variants={fadeUp}
            whileHover={{ scale: 1.05, backgroundColor: "#d4af37", color: "#050505" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 mx-auto px-8 py-4 bg-transparent border border-amber-500/40 text-amber-500 text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(217,119,6,0.1)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)]"
          >
            <span>Eksplorasi Rasa</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* STORY / PHILOSOPHY SECTION */}
      <section id="story" className="py-32 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
        
        {/* Breathing Glow */}
        <motion.div 
          variants={glowBreathing} animate="animate"
          className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="pl-0 md:pl-8 border-l-0 md:border-l border-amber-500/20"
          >
            <motion.div variants={floating} animate="animate" className="inline-block relative">
              <Coffee className="w-10 h-10 text-amber-500 mb-8 opacity-90 drop-shadow-[0_0_10px_rgba(217,119,6,0.3)]" strokeWidth={1.5} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Kualitas <br/>Menuntut Batasan.
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-stone-400 text-lg font-light leading-relaxed">
              <p>
                Kami tidak memproduksi dalam jumlah massal. Untuk menjaga kesegaran absolut dan kelancaran ekstraksi rasa, <span className="text-stone-200 font-medium">HelcoBali</span> hanya diseduh dalam <i>small-batch</i> setiap minggunya.
              </p>
              <p>
                Oleh karena itu, kami tidak melayani pembelian eceran secara langsung. Karya kami hanya kami percayakan pada mitra ritel pilihan yang memahami standar tinggi sebuah kopi artisan.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[600px] w-full group"
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-amber-500/5 translate-x-4 translate-y-4 border border-amber-500/20 z-0 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-1000"></div>
            <img
              src="/story.png"
              alt="Proses Pembuatan"
              className="relative z-10 w-full h-full object-cover shadow-2xl filter contrast-110 grayscale-[20%]"
            />
          </motion.div>
        </div>
      </section>

      {/* WHERE TO FIND US (SLIDER) */}
      <section id="outlets" className="py-32 px-6 overflow-hidden relative bg-[#080808]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-amber-500 tracking-[0.3em] text-xs font-semibold uppercase mb-4 block">Mitra Ritel</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white mb-6">Temukan Kami</motion.h2>
          <motion.p variants={fadeUp} className="text-stone-400 font-light text-lg">Jelajahi mitra eksklusif kami dan dapatkan kesegaran cold brew di lokasi terdekat Anda.</motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative group px-12 md:px-0 z-10">
          <div className="overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <motion.div
              className="flex transition-transform duration-1000 ease-[0.25,1,0.5,1]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {outlets.map((outlet) => (
                <div key={outlet.id} className="min-w-full flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden group/img">
                    <img src={outlet.image} alt={outlet.name} className="w-full h-full object-cover opacity-80 filter contrast-125 group-hover/img:scale-110 transition-transform duration-[2s] ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden"></div>
                  </div>
                  <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center relative bg-[#0a0a0a] overflow-hidden">
                    {/* Breathing glow effect behind text */}
                    <motion.div 
                      variants={glowBreathing} animate="animate"
                      className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"
                    ></motion.div>
                    
                    <motion.div variants={floating} animate="animate" className="self-start">
                      <MapPin className="text-amber-500 mb-6 w-8 h-8 opacity-90 drop-shadow-[0_0_10px_rgba(217,119,6,0.3)]" strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">{outlet.name}</h3>
                    <p className="text-amber-500 text-xs tracking-widest uppercase mb-6 font-medium">{outlet.location}</p>
                    <p className="text-stone-400 font-light leading-relaxed mb-10 text-lg">{outlet.desc}</p>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 self-start border-b border-amber-500/50 pb-2 text-amber-500 hover:text-amber-400 transition-colors uppercase tracking-[0.15em] text-xs font-semibold group-hover/btn:border-amber-400"
                    >
                      <span>Lihat di Maps</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#111" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 bg-[#050505] border border-white/10 text-stone-400 p-4 hover:border-amber-500 hover:text-amber-500 transition-colors z-10 backdrop-blur-md shadow-xl"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#111" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 bg-[#050505] border border-white/10 text-stone-400 p-4 hover:border-amber-500 hover:text-amber-500 transition-colors z-10 backdrop-blur-md shadow-xl"
            aria-label="Next slide"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </motion.button>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-12 relative z-10">
            {outlets.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1 transition-all duration-500 ${currentSlide === idx ? 'bg-amber-500 w-12' : 'bg-stone-700 w-6 hover:bg-stone-500'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / B2B SECTION */}
      <section id="contact" className="py-32 relative bg-[#030303] flex justify-center items-center flex-col overflow-hidden">
        {/* Breathing glowing radial background */}
        <motion.div 
          variants={glowBreathing} animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"
        ></motion.div>
        
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
        
        <motion.div
          className="max-w-3xl mx-auto text-center px-6 relative z-10"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <motion.div variants={floating} animate="animate" className="inline-block">
            <Phone className="w-10 h-10 text-amber-500 mx-auto mb-8 opacity-90 drop-shadow-[0_0_10px_rgba(217,119,6,0.3)]" strokeWidth={1.5} />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white mb-6">Kemitraan Korporat & B2B</motion.h2>
          <motion.p variants={fadeUp} className="text-stone-400 font-light text-xl mb-12 leading-relaxed">
            Hadirkan sajian premium untuk <i className="text-stone-300">pantry</i> perusahaan, <i className="text-stone-300">hospitality</i>, atau acara privat Anda. Kami siap melayani suplai eksklusif dengan penawaran khusus.
          </motion.p>
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(217,119,6,0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-amber-500 transition-colors duration-500 text-sm"
          >
            Hubungi Tim Suplai
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-amber-500 font-serif text-xl tracking-[0.2em] uppercase font-medium">
            HelcoBali
          </div>
          <p className="text-stone-600 text-xs uppercase tracking-widest font-light">
            &copy; {new Date().getFullYear()} HelcoBali Artisan Cold Brew. Bali, Indonesia.
          </p>
        </div>
      </footer>

    </div>
  );
}