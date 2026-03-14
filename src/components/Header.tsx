import { Github, Linkedin, Mail, Terminal, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border"
        >
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-neon-green font-mono">
                    <Terminal size={20} />
                    <span className="text-sm">~/sameer_shedge</span>
                </div>

                <nav className="hidden sm:flex items-center space-x-8 text-sm font-medium text-text-secondary">
                    <a href="#projects" className="hover:text-neon-green transition-colors">Projects</a>
                    <a href="#about" className="hover:text-neon-green transition-colors">About</a>
                    <a href="#contact" className="hover:text-neon-green transition-colors">Contact</a>
                    <button 
                        onClick={() => setIsDark(!isDark)} 
                        className="text-text-primary hover:text-neon-green transition-colors p-2 rounded-full hover:bg-dark-border/50"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
