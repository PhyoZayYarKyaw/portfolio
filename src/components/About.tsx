import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Mail, Phone, GitBranch, Link2, GraduationCap, Briefcase, Heart } from 'lucide-react';
import { personal, education } from '../data/portfolioData';
import avatarImg from '../assets/avatar.jpg';

export default function About() {
  const { ref, inView } = useInView(0.2);

  const stats = [
    { label: 'Years Experience', value: 'Over 2 Years', icon: Briefcase },
    { label: 'Projects Delivered', value: '4+', icon: Heart },
    { label: 'Technologies', value: '15+', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30 dark:opacity-20 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          id="about-header"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-2">01. WHO I AM</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate engineer building the future with cloud, AI, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="about-bio"
          >
            {/* Avatar / Profile photo */}
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-primary-500 via-purple-600 to-accent-400 p-1 shadow-2xl shadow-primary-500/40">
                  <div className="w-full h-full rounded-3xl bg-slate-100 dark:bg-dark-700 overflow-hidden">
                    <img
                      src={avatarImg}
                      alt="Phyo Zay Yar Kyaw"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl
                                bg-gradient-to-r from-primary-500 to-purple-600 text-white text-xs font-bold
                                shadow-lg shadow-primary-500/40">
                  Senior Engineer
                </div>
                {/* Online indicator */}
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white dark:border-dark-800 shadow-lg" />
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="text-lg">
                {personal.bio}
              </p>
              <p>
                {personal.bioExtended}
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-3" id="about-contact-info">
              {[
                { icon: MapPin, label: personal.location },
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                { icon: GitBranch, label: 'github.com/PhyoZayYarKyaw', href: personal.github },
                { icon: Link2, label: 'LinkedIn Profile', href: personal.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm group">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                    <Icon size={14} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors truncate"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-600 dark:text-slate-400">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
            id="about-right"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4" id="about-stats">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-5 text-center card-hover"
                  id={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-primary-500" />
                  </div>
                  <div className="text-2xl font-extrabold gradient-text mb-1">{value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass-card p-6" id="about-education">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white">Education</h3>
              </div>
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary-500/30 pl-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">{edu.degree}</h4>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{edu.year}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Personal interests */}
            <div className="glass-card p-6" id="about-interests">
              <h3 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span>💡</span> Professional Traits
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Analytical Thinking', 'Team Collaboration', 'Communication', 'Adaptability', 'Continuous Learning'].map((trait) => (
                  <span key={trait} className="skill-badge text-xs">{trait}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6" id="about-languages">
              <h3 className="font-bold text-slate-800 dark:text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {[
                  { name: 'Burmese', level: 'Native', percent: 100 },
                  { name: 'English', level: 'Intermediate', percent: 65 },
                ].map(({ name, level, percent }) => (
                  <div key={name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{level}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 dark:bg-dark-600 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
