import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Experience' },
  { href: '#case-studies', label: 'Case Studies' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'skills', 'timeline', 'case-studies'];
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-gradient-cyan font-bold text-lg tracking-tight font-mono">
          AD
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const sectionId = href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-cyan'
                      : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-brand-muted hover:text-brand-text"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-brand-cyan/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-brand-muted hover:text-brand-cyan text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
