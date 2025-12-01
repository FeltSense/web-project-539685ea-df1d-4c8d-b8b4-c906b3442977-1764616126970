'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Wellness Coach',
    quote: 'Monday Motivation Hub completely transformed how I start my weeks. The energy and positivity I get from this community has helped me build habits that actually stick. I\'ve lost 30 pounds and gained a whole new outlook on life.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Marcus Chen',
    role: 'Corporate Executive',
    quote: 'After years of dreading Mondays, I finally found a community that turns the start of each week into something I actually look forward to. My productivity has skyrocketed and my stress levels have never been lower.',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Yoga Instructor',
    quote: 'The mindfulness practices and motivational content here are world-class. I recommend Monday Motivation Hub to all my students who want to create lasting positive change in their lives.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900">Real Stories. Real Transformations.</h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">Discover how our community members are conquering their Mondays and building lives they love.</p>
        </motion.div>

        {/* Featured Large Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-14 relative">
            {/* Giant Quote Mark */}
            <div className="absolute top-8 left-10 text-teal-600 opacity-20">
              <svg className="w-20 h-20 md:w-28 md:h-28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 leading-relaxed mb-10">
                "{testimonials[0].quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 ring-4 ring-teal-50">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{testimonials[0].name}</h4>
                <p className="text-teal-600 font-medium">{testimonials[0].role}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-teal-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-teal-50">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-500">Rated 4.9/5 by over 10,000+ members</p>
        </motion.div>
      </div>
    </section>
  );
}
