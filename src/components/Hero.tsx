import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, User, FileText, Github, Linkedin, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = ({ onOpenTerminal }: { onOpenTerminal: () => void }) => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            }) + ' // IST');
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="about" className="pt-32 pb-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl mx-auto"
            >
                <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-6">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
                        Sameer Shedge
                    </h1>
                    <div className="hidden sm:flex items-center px-3 py-1 rounded-full border border-neon-green/30 bg-neon-green/10 text-neon-green text-xs font-medium">
                        <span className="w-2 h-2 rounded-full bg-neon-green mr-2 animate-pulse"></span>
                        Available for work
                    </div>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-text-secondary font-mono mb-10">
                    Software Engineer
                </motion.h2>

                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm md:text-base font-mono">
                    <div className="flex items-center text-text-secondary">
                        <Terminal size={16} className="mr-3 text-neon-green" />
                        <span>Full-Stack & AI/ML</span>
                    </div>
                    <div className="flex items-center text-text-secondary">
                        <MapPin size={16} className="mr-3 text-neon-green" />
                        <span>Mumbai, India</span>
                    </div>
                    <div className="flex items-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                        <Mail size={16} className="mr-3 text-neon-green" />
                        <a href="mailto:sameershedge77100@gmail.com">sameershedge77100@gmail.com</a>
                    </div>
                    <div className="flex items-center text-text-secondary">
                        <Clock size={16} className="mr-3 text-neon-green" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center text-text-secondary">
                        <User size={16} className="mr-3 text-neon-green" />
                        <span>he/him</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="prose prose-invert max-w-none mb-10 text-text-secondary leading-relaxed space-y-4">
                    <p>
                        I'm a <span className="text-text-primary font-medium">Full Stack Developer</span> and <span className="text-neon-green font-medium">AI/ML Enthusiast</span> currently pursuing B.Tech in Information Technology. I enjoy building scalable <span className="text-gray-300 border border-gray-700 bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">Web Applications</span>, working on backend systems, and exploring intelligent solutions using machine learning.
                    </p>
                    <p>
                        Passionate about clean code and layered design. Regularly practice data structures and algorithms, and always looking to learn and evolve. "Keep building. Keep improving. Keep learning." 🔥
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
                    <a href="/Sameer_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm font-medium hover:border-text-secondary transition-colors group">
                        <FileText size={16} className="mr-2 text-text-secondary group-hover:text-text-primary transition-colors" />
                        Resume
                    </a>
                    <a href="mailto:sameershedge77100@gmail.com" className="flex items-center px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm font-medium hover:border-text-secondary transition-colors group">
                        <Mail size={16} className="mr-2 text-text-secondary group-hover:text-text-primary transition-colors" />
                        Contact
                    </a>

                    <div className="w-px h-6 bg-dark-border mx-2"></div>

                    <a href="https://github.com/Sameershedge77" target="_blank" rel="noreferrer" className="p-2 bg-dark-card border border-dark-border rounded-lg hover:border-neon-green hover:text-neon-green transition-all">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/sameer-shedge-aa8b752a4" target="_blank" rel="noreferrer" className="p-2 bg-dark-card border border-dark-border rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all">
                        <Linkedin size={18} />
                    </a>
                    <button onClick={onOpenTerminal} className="flex flex-col items-center justify-center w-10 h-10 bg-dark-card border border-neon-green/50 shadow-[0_0_15px_rgba(0,255,186,0.15)] rounded-lg hover:shadow-[0_0_20px_rgba(0,255,186,0.3)] hover:border-neon-green text-neon-green transition-all">
                        <span className="font-mono text-base font-bold leading-none">{'>_'}</span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
