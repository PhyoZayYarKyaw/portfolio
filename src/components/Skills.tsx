import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export default function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          id="skills-header"
        >
          <p className="text-primary-600 dark:text-primary-400 font-mono text-sm font-medium mb-2">02. WHAT I KNOW</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            A curated toolkit built through real-world enterprise projects and continuous learning.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
          {skills.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="glass-card p-6 card-hover group"
              id={`skill-category-${cat.category.toLowerCase().replace(/[\s&]+/g, '-')}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl shadow-lg`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">{cat.category}</h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.08 + skillIdx * 0.05 }}
                    className="skill-badge"
                    id={`skill-${skill.toLowerCase().replace(/[\s/.]+/g, '-')}`}
                  >
                    <CheckCircle size={10} className="text-primary-500" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack visual showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-card p-8"
          id="skills-tech-showcase"
        >
          <h3 className="text-center font-bold text-slate-800 dark:text-white mb-6 text-lg">
            Primary Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Python', emoji: '🐍', color: 'from-yellow-400 to-green-500' },
              { name: 'FastAPI', emoji: '⚡', color: 'from-green-400 to-teal-500' },
              { name: 'AWS Lambda', emoji: '☁️', color: 'from-orange-400 to-amber-500' },
              { name: 'Angular', emoji: '🔴', color: 'from-red-400 to-red-600' },
              { name: 'React', emoji: '⚛️', color: 'from-cyan-400 to-blue-500' },
              { name: 'PostgreSQL', emoji: '🐘', color: 'from-blue-400 to-indigo-500' },
              { name: 'Docker', emoji: '🐳', color: 'from-blue-400 to-cyan-500' },
              { name: 'Django', emoji: '🎸', color: 'from-green-500 to-emerald-600' },
              { name: 'TypeScript', emoji: '📘', color: 'from-blue-500 to-indigo-600' },
              { name: 'GitHub', emoji: '🐙', color: 'from-slate-600 to-slate-800' },
            ].map(({ name, emoji, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                            bg-gradient-to-r ${color} text-white shadow-lg
                            hover:shadow-xl transition-all duration-200 cursor-default`}
                id={`tech-${name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span>{emoji}</span>
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
