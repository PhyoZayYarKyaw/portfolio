import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, Heart, Code2, ArrowUp } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-dark-900 text-slate-400 overflow-hidden" id="footer">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="orb orb-1" style={{ opacity: 0.05 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
            id="footer-brand"
          >
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <span className="font-bold text-white">
                <span className="gradient-text">PZYK</span>
                <span className="text-slate-600">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500">{personal.title}</p>
            <p className="text-xs text-slate-600 mt-1">{personal.location}</p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
            id="footer-socials"
          >
            {[
              { href: personal.github, icon: GitBranch, label: 'GitHub' },
              { href: personal.linkedin, icon: Link2, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.1, y: -2 }}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                id={`footer-social-${label.toLowerCase()}`}
                className="w-9 h-9 rounded-xl flex items-center justify-center
                           bg-dark-700 hover:bg-primary-900/40 border border-white/5 hover:border-primary-700/50
                           text-slate-500 hover:text-primary-400 transition-all duration-200"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                       bg-dark-700 hover:bg-primary-900/30 border border-white/5 hover:border-primary-700/50
                       text-slate-400 hover:text-primary-400 transition-all duration-200"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/5" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600"
          id="footer-copyright"
        >
          <p>
            © {new Date().getFullYear()} <span className="text-slate-400">Phyo Zay Yar Kyaw</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={10} className="text-rose-500 fill-rose-500" /> using React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
