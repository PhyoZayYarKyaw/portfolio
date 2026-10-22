import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Link2, Mail, ArrowDown, Sparkles, Download, MapPin } from 'lucide-react';
import { personal } from '../data/portfolioData';
import avatarImg from '../assets/avatar.jpg';

const TYPING_WORDS = [
  'Senior Software Engineer',
  'Full Stack Engineer',
  'Cloud-Native Developer',
  'FastAPI & AWS Expert',
  'AI & ML Enthusiast',
  'Angular & React Dev',
];

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = TYPING_WORDS[typingIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === word.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(word.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-900"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-100 dark:opacity-100" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white dark:to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* ── LEFT: Content ── */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                         bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50
                         text-primary-700 dark:text-primary-300 text-sm font-medium"
              id="hero-badge"
            >
              <Sparkles size={14} className="animate-pulse" />
              Available for new opportunities
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Greeting + Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
              id="hero-name"
            >
              <span className="text-slate-500 dark:text-slate-400 text-2xl sm:text-3xl font-semibold block mb-1">
                Hi there, I'm
              </span>
              <span className="gradient-text">Phyo Zay Yar</span>
              <br />
              <span className="gradient-text">Kyaw</span>
            </motion.h1>

            {/* Typing subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-6 text-lg sm:text-xl md:text-2xl font-semibold"
              id="hero-typing"
            >
              <span className="text-slate-400 dark:text-slate-500 font-mono">&lt;</span>
              <span className="text-primary-600 dark:text-primary-400 font-mono">
                {displayText}
                <span className="animate-pulse text-primary-400">|</span>
              </span>
              <span className="text-slate-400 dark:text-slate-500 font-mono">/&gt;</span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-5"
              id="hero-location"
            >
              <MapPin size={14} className="text-primary-500" />
              {personal.location}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-500 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-xl"
              id="hero-description"
            >
              {personal.bio.slice(0, 180)}...
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-8"
              id="hero-ctas"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary group"
                id="hero-view-projects"
              >
                <span>View Projects</span>
                <span className="group-hover:rotate-12 transition-transform">🚀</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="btn-secondary"
                id="hero-contact-me"
              >
                <Mail size={16} />
                Contact Me
              </button>
              <a
                href={personal.resumeUrl}
                download="Phyo-Zay-Yar-Kyaw-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium
                           text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400
                           border border-slate-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-700
                           bg-white/50 dark:bg-dark-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20
                           transition-all duration-200 transform hover:-translate-y-0.5"
                id="hero-download-resume"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3"
              id="hero-socials"
            >
              {[
                { href: personal.github, icon: GitBranch, label: 'GitHub' },
                { href: personal.linkedin, icon: Link2, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  id={`hero-social-${label.toLowerCase()}`}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                             bg-white dark:bg-dark-700 text-slate-600 dark:text-slate-300
                             hover:text-primary-600 dark:hover:text-primary-400
                             border border-slate-200 dark:border-white/10
                             hover:border-primary-300 dark:hover:border-primary-600
                             shadow-sm hover:shadow-lg hover:shadow-primary-500/20
                             transition-all duration-200"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            id="hero-photo"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-400/30 scale-110 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border border-purple-400/20 scale-125" />

              {/* Glow backdrop */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary-500/30 via-purple-500/20 to-accent-400/20 blur-2xl scale-110" />

              {/* Photo frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Gradient border */}
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-primary-500 via-purple-600 to-accent-400 p-1 shadow-2xl shadow-primary-500/40">
                  <div className="w-full h-full rounded-[2.25rem] overflow-hidden bg-slate-100 dark:bg-dark-700">
                    <img
                      src={avatarImg}
                      alt="Phyo Zay Yar Kyaw — Senior Software Engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating chip: Role */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-6 top-8 glass-card px-3 py-2 shadow-xl"
                  id="hero-chip-role"
                >
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Senior Software Eng</p>
                  <p className="text-xs text-primary-500">Myanmar Info Tech</p>
                </motion.div>

                {/* Floating chip: Experience */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -right-6 bottom-10 glass-card px-3 py-2 shadow-xl"
                  id="hero-chip-exp"
                >
                  <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
                  <p className="text-sm font-extrabold gradient-text">Over 2 Years</p>
                </motion.div>

                {/* Floating chip: Tech */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 shadow-xl flex items-center gap-2"
                  id="hero-chip-tech"
                >
                  <span className="text-lg">☁️</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-white">Cloud & AI</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">AWS · FastAPI · Angular</p>
                  </div>
                </motion.div>

                {/* Online indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-500 font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center pb-8"
          id="hero-scroll-indicator"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600 hover:text-primary-500 transition-colors"
            onClick={() => scrollTo('about')}
          >
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
