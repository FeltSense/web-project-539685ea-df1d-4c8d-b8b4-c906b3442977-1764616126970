'use client';

import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Target } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Mindful Morning Routines',
    description: 'Start every week with intention. Our guided morning practices help you build sustainable habits that energize your body and calm your mind.',
    span: 'md:col-span-2',
    bg: 'bg-teal-50',
    minHeight: 'min-h-[300px]',
  },
  {
    icon: Brain,
    title: 'Mental Clarity Sessions',
    description: 'Weekly meditation and breathwork sessions designed to sharpen focus and reduce stress. Feel centered all week long.',
    span: '',
    bg: 'bg-slate-50',
    minHeight: 'min-h-[300px]',
  },
  {
    icon: Heart,
    title: 'Wellness Coaching',
    description: 'One-on-one guidance from certified coaches who understand your unique journey toward better health.',
    span: '',
    bg: 'bg-white border border-slate-100',
    minHeight: '',
  },
  {
    icon: Target,
    title: 'Goal Tracking & Accountability',
    description: 'Set meaningful wellness goals and track your progress with our supportive community. Celebrate wins together every Monday.',
    span: 'md:col-span-2',
    bg: 'bg-slate-900',
    minHeight: '',
    dark: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Transform Your Mondays Into Momentum
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Four pillars of wellness designed to kickstart your week with energy, clarity, and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${service.span} ${service.bg} ${service.minHeight} rounded-3xl p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.dark ? 'bg-teal-600' : 'bg-teal-100'} flex items-center justify-center mb-6`}>
                <service.icon className={`w-7 h-7 ${service.dark ? 'text-white' : 'text-teal-600'}`} />
              </div>
              <h3 className={`text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] mb-3 ${service.dark ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`text-lg ${service.dark ? 'text-slate-300' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Wellness Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
