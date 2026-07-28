import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 dark:opacity-20 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          id="experience-header"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-2">03. WHERE I'VE WORKED</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Building cloud-native enterprise solutions that make a real difference.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative" id="experience-timeline">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-transparent" />

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col md:flex-row gap-8 mb-12"
              id={`experience-${exp.id}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: idx * 0.15 + 0.3, type: 'spring' }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-600 
                             flex items-center justify-center shadow-lg shadow-primary-500/40
                             border-2 border-white dark:border-dark-800"
                >
                  <Briefcase size={20} className="text-white" />
                </motion.div>
              </div>

              {/* Left: Company info (desktop) */}
              <div className="md:w-1/2 md:pr-16 pl-20 md:pl-0 md:text-right">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15 + 0.2 }}
                  className="glass-card p-5 inline-block md:float-right text-left md:max-w-xs"
                  id={`exp-company-${exp.id}`}
                >
                  <h3 className="font-extrabold text-slate-800 dark:text-white text-lg leading-tight">
                    {exp.role}
                  </h3>
                  <p className="gradient-text font-bold text-sm">{exp.company}</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                  <span className="mt-3 inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                    {exp.type}
                  </span>
                </motion.div>
              </div>

              {/* Right: Highlights & Technologies */}
              <div className="md:w-1/2 md:pl-16 pl-20">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                  className="glass-card p-6"
                  id={`exp-details-${exp.id}`}
                >
                  <h4 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-4">Key Contributions</h4>
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: idx * 0.15 + 0.4 + i * 0.06 }}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <ChevronRight size={14} className="text-primary-500 mt-0.5 shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg font-medium
                                     bg-primary-50 dark:bg-primary-900/30
                                     text-primary-700 dark:text-primary-300
                                     border border-primary-200 dark:border-primary-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Timeline end indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, type: 'spring' }}
            className="relative flex justify-center md:justify-center mt-4 pl-20 md:pl-0"
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-card text-sm text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Currently working here
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
