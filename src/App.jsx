import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <CaseStudies />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}
