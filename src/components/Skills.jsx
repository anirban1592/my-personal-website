import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/skills';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-brand-muted font-mono text-sm uppercase tracking-widest mb-3">
          What I Bring
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
          Core <span className="text-gradient-cyan">Skills</span>
        </h2>
      </motion.div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map(({ id, category, Icon, items }) => (
          <motion.div
            key={id}
            variants={item}
            whileHover={{
              y: -4,
              boxShadow: '0 0 24px rgba(0,212,255,0.15)',
            }}
            className="glass rounded-xl p-6 cursor-default"
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,212,255,0.1)' }}
              >
                <Icon size={18} color="#00d4ff" />
              </div>
              <h3 className="text-brand-text font-semibold text-sm">{category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-xs text-brand-cyan px-2 py-1 rounded"
                  style={{ background: 'rgba(0,212,255,0.06)' }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
