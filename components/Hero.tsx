'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
          alt="Wellness background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-teal-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6"
          >
            Transform Your Life Today
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Ignite Your Week.{' '}
            <span className="text-amber-400">Elevate Your Life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Science-backed wellness programs that help you build unstoppable momentum, 
            starting every Monday. Join 25,000+ members thriving daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md w-full sm:w-auto">
              Start Your Journey
            </a>
            <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-xl px-8 py-4 transition-all duration-300 w-full sm:w-auto">
              Explore Programs
            </a>
          </div>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">25K+</div>
            <div className="text-slate-300 text-sm font-medium">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-slate-300 text-sm font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
            <div className="text-slate-300 text-sm font-medium">Expert Coaches</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">4.9★</div>
            <div className="text-slate-300 text-sm font-medium">Member Rating</div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
