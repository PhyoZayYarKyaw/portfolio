import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';
import { ChevronRight, Star } from 'lucide-react';

const FILTER_OPTIONS = ['All', 'Cloud & Enterprise', 'Full Stack Web', 'Desktop Application', 'Web Application'];

export default function Projects() {
  const { ref, inView } = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          id="projects-header"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-2">04. WHAT I'VE BUILT</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects showcasing cloud-native architecture, full-stack development, and enterprise tooling.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          id="projects-filters"
        >
          {FILTER_OPTIONS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              id={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                ${activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-slate-100 dark:bg-dark-700 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 border border-slate-200 dark:border-white/10'
                }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
            id="projects-grid"
          >
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card overflow-hidden card-hover cursor-pointer group"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                id={`project-${project.id}`}
              >
                {/* Card header with gradient */}
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-6">
                  {/* Icon + title row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-800 dark:text-white text-base leading-tight">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
                          )}
                        </div>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === project.id ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1"
                    >
                      <ChevronRight size={16} className="text-slate-400 group-hover:text-primary-500 transition-colors" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Expandable highlights */}
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mb-4 overflow-hidden"
                        id={`project-highlights-${project.id}`}
                      >
                        <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Key Features
                        </h4>
                        <ul className="space-y-1.5">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <ChevronRight size={13} className="text-primary-500 mt-0.5 shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5" id={`project-tech-${project.id}`}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md font-medium
                                   bg-slate-100 dark:bg-dark-600 text-slate-600 dark:text-slate-400
                                   border border-slate-200 dark:border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-slate-400 dark:text-slate-600"
          >
            No projects in this category yet.
          </motion.div>
        )}
      </div>
    </section>
  );
}
