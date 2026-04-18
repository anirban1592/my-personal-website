import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-brand-muted font-mono text-sm uppercase tracking-widest mb-3">
          Proven Results
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
          Case <span className="text-gradient-cyan">Studies</span>
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {caseStudies.map(({ id, Icon, title, client, tags, problem, solution, impact }) => (
          <motion.div
            key={id}
            variants={item}
            whileHover={{
              y: -6,
              boxShadow: '0 0 32px rgba(0,212,255,0.12)',
            }}
            className="glass rounded-xl p-6 scan-line-card flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(0,212,255,0.1)' }}
              >
                <Icon size={20} color="#00d4ff" />
              </div>
              <div>
                <h3 className="text-brand-text font-semibold text-base leading-tight">
                  {title}
                </h3>
                <p className="text-brand-muted text-xs mt-0.5">{client}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-brand-blue px-2 py-0.5 rounded border border-brand-blue/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Problem / Solution / Impact */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="border-l-2 border-brand-cyan/30 pl-4">
                <p className="text-brand-muted text-xs font-mono uppercase mb-1">Problem</p>
                <p className="text-brand-text text-sm leading-relaxed">{problem}</p>
              </div>
              <div className="border-l-2 border-brand-cyan/30 pl-4">
                <p className="text-brand-muted text-xs font-mono uppercase mb-1">Solution</p>
                <p className="text-brand-text text-sm leading-relaxed">{solution}</p>
              </div>
              <div className="border-l-2 border-brand-cyan pl-4 mt-auto">
                <p className="text-brand-muted text-xs font-mono uppercase mb-1">Impact</p>
                <p className="text-brand-cyan font-medium text-sm">{impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
