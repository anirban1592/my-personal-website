import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '../data/timeline';

function TimelineEntry({ entry, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center md:justify-center gap-0 mb-12">
      {/* Desktop: alternating layout */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`glass rounded-xl p-6 w-full md:w-5/12 ${
          isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-brand-cyan text-xs font-medium">
            {entry.year}
          </span>
          <span className="text-brand-muted text-xs">{entry.location}</span>
        </div>
        <h3 className="text-brand-text font-semibold text-base mb-1">
          {entry.role}
        </h3>
        <p className="text-gradient-cyan font-medium text-sm mb-3">
          {entry.company}
        </p>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {entry.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-brand-blue px-2 py-0.5 rounded border border-brand-blue/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Center dot (desktop only) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-brand-cyan bg-brand-bg z-10" />
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-brand-muted font-mono text-sm uppercase tracking-widest mb-3">
          11 Years
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
          Career <span className="text-gradient-cyan">Journey</span>
        </h2>
      </motion.div>

      {/* Center vertical line (desktop) */}
      <div className="relative">
        <div
          className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px"
          style={{
            background:
              'linear-gradient(to bottom, #00d4ff, #0066ff, transparent)',
          }}
        />
        {timeline.map((entry, i) => (
          <TimelineEntry key={entry.year + entry.company} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
