'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Unlimited access to weekly motivation sessions',
  'Personalized wellness action plans',
  'One-on-one coaching calls (2x per month)',
  'Exclusive community support group',
  'Guided meditation & mindfulness library',
  'Progress tracking dashboard',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            One simple plan. Everything you need to transform your mindset and build lasting motivation habits.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 hover:shadow-md transition-all duration-300"
        >
          <div className="text-center mb-8 pb-8 border-b border-slate-100">
            <span className="inline-block bg-teal-50 text-teal-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              Early Access Pricing
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">$29</span>
              <span className="text-slate-500 text-lg">/month</span>
            </div>
            <span className="text-amber-400 font-semibold text-sm mt-2 inline-block">
              ✨ Pre-order & save 40%
            </span>
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - $29
          </button>
          
          <p className="text-center text-slate-400 text-sm mt-4">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
