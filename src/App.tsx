import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TerminalModal from './components/TerminalModal';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen relative font-sans text-text-primary selection:bg-neon-green/30 selection:text-neon-green">
      {/* Background Grid Pattern */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Gradient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-green/5 blur-[120px] z-[-1] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] z-[-1] pointer-events-none" />

      <Header />

      <main className="px-6 md:px-12 lg:px-24">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <Skills />
        <Projects />

        {/* Contact/Footer Section */}
        <section id="contact" className="py-32 border-t border-dark-border/50 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">Let's Connect</h2>
            <p className="text-text-secondary mb-10 text-lg">
              Currently seeking new opportunities to build amazing software.
              Want to work together or just say hi? My inbox is always open.
            </p>
            <a
              href="mailto:sameershedge77100@gmail.com"
              className="inline-flex items-center space-x-2 text-neon-green font-mono text-lg border-b border-neon-green/30 hover:border-neon-green transition-colors pb-1"
            >
              <Mail size={20} />
              <span>sameershedge77100@gmail.com</span>
            </a>

            <div className="flex justify-center mt-16 space-x-6">
              <a href="https://github.com/Sameershedge77" target="_blank" rel="noreferrer" className="p-3 bg-dark-card border border-dark-border rounded-full hover:border-neon-green hover:text-neon-green transition-all group">
                <Github size={20} className="text-text-secondary group-hover:text-neon-green transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/sameer-shedge-aa8b752a4" target="_blank" rel="noreferrer" className="p-3 bg-dark-card border border-dark-border rounded-full hover:border-blue-400 hover:text-blue-400 transition-all group">
                <Linkedin size={20} className="text-text-secondary group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            <p className="mt-12 text-xs font-mono text-text-muted">
              Designed & Built with React, Tailwind & Framer Motion
            </p>
          </motion.div>
        </section>
      </main>

      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
}

export default App;
