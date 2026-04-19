import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const taglines = [
  '11 Years of B2B Commerce Transformation',
  'SAP Commerce Cloud & Composable Architecture',
  'AI-Driven Automation at Enterprise Scale',
];

const chips = [
  { label: 'SAP Commerce', cls: 'float-1' },
  { label: 'Azure', cls: 'float-2' },
  { label: 'AWS', cls: 'float-3' },
  { label: 'SAP BTP', cls: 'float-4' },
  { label: 'Kafka', cls: 'float-5' },
  { label: 'AI Agents', cls: 'float-6' },
];

export default function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = taglines[taglineIdx];
    let i = displayed.length;

    if (typing) {
      if (i < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 45);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (i > 0) {
        const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 22);
        return () => clearTimeout(t);
      } else {
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, taglineIdx]);

  return (
    <section
      id="hero"
      className="grid-bg-animated min-h-screen flex items-center justify-center relative"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating chips */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {chips.map(({ label, cls }, i) => {
            const positions = [
              { top: '10%', left: '5%' },
              { top: '15%', right: '8%' },
              { top: '50%', left: '2%' },
              { top: '55%', right: '4%' },
              { bottom: '20%', left: '8%' },
              { bottom: '15%', right: '10%' },
            ];
            return (
              <span
                key={label}
                className={`absolute glass px-3 py-1.5 rounded-full text-xs font-mono text-brand-cyan ${cls}`}
                style={positions[i]}
              >
                {label}
              </span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-muted text-sm font-mono mb-4 tracking-widest uppercase">
            Available for Senior Roles
          </p>

          <h1
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ color: '#e2e8f0' }}
          >
            Anirban{' '}
            <span className="text-gradient-cyan">Das</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-muted mb-6 font-medium">
            Principal Consultant · Cloud Platforms · AI Agent Design
          </p>

          {/* Typing tagline */}
          <div className="h-8 mb-10 flex items-center justify-center">
            <p className="text-brand-cyan font-mono text-sm md:text-base">
              {displayed}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{ background: '#00d4ff', color: '#0a0a0f' }}
            >
              View Case Studies
              <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border border-brand-cyan/40 text-brand-cyan hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-200"
              download
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent mx-auto animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
