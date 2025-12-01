'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'Community', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with CTA */}
        <div className="text-center pb-16 border-b border-slate-800">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
            Ready to Transform Your Week?
          </h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands who start every Monday with purpose, energy, and unstoppable motivation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Your Journey
            <Heart className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Column - Spans 2 */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Monday Motivation Hub
            </Link>
            <p className="text-slate-400 mt-4 leading-relaxed max-w-sm">
              Empowering you to conquer every Monday and build a life filled with wellness, purpose, and unstoppable momentum.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Company</h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Support</h4>
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Resources</h4>
            {footerLinks.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Monday Motivation Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-teal-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
