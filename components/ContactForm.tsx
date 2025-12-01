'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: '539685ea-df1d-4c8d-b8b4-c906b3442977',
          founder_id: 'a0a57eb5-e342-49fc-bac5-98bdb08caec5',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Ready to transform your Mondays and every day after? Join thousands who have already discovered their path to lasting motivation and wellness.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us</p>
                  <p className="text-white font-medium">hello@mondaymotivation.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Visit us</p>
                  <p className="text-white font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Thanks for signing up!</h3>
                <p className="text-slate-500">We will be in touch soon to help you start your wellness journey.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
                <div className="text-center mb-2">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900">Get Your Free Consultation</h3>
                  <p className="text-slate-500 mt-2">Fill out the form and we&apos;ll reach out within 24 hours</p>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-teal-600 focus:ring-teal-600 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="Your name" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-teal-600 focus:ring-teal-600 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="you@example.com" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full rounded-xl border-slate-200 border focus:ring-2 py-4 px-5 focus:border-teal-600 focus:ring-teal-600 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                    placeholder="+1 (555) 000-0000" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Submitting...' : 'Get Started'}
                  <Send className="w-5 h-5 ml-2" />
                </button>
                
                <p className="text-center text-sm text-slate-400">
                  By signing up, you agree to our Terms of Service
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  </div></div>);
}
