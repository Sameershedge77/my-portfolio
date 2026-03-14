import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';

type TerminalModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

type CommandRecord = {
    command: string;
    output: React.ReactNode;
};

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 1800);
        return () => clearTimeout(timer);
    }, [onComplete]);

    const lines = [
        <p key="1" className="text-blue-400 font-bold">Welcome to Windows AI (Workstation Edition)</p>,
        <p key="2">Kernel: Windows NT 10.0.build</p>,
        <br key="3" />,
        <p key="4">* System Health: <span className="text-neon-green">Optimal</span></p>,
        <p key="5">* AI Module: <span className="text-neon-green">Online</span></p>,
        <br key="6" />,
        <p key="7">Last login: {new Date().toLocaleString()} on tty1</p>,
        <p key="8">Type <span className="text-neon-green">'help'</span> for available commands. Try <span className="text-neon-green">'about'</span> for fun! 👾</p>
    ];

    return (
        <div className="text-text-secondary mb-4 space-y-1 font-mono">
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.1 }}
                >
                    {line}
                </motion.div>
            ))}
        </div>
    );
};

const TerminalModal = ({ isOpen, onClose }: TerminalModalProps) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandRecord[]>([]);
    const [isBooting, setIsBooting] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-focus input when modal opens or history updates
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            if (history.length === 0) {
                setIsBooting(true);
                setHistory([
                    {
                        command: '',
                        output: <BootSequence onComplete={() => setIsBooting(false)} />
                    }
                ]);
            } else {
                setIsBooting(false);
            }
        }
    }, [isOpen]);

    // Scroll to bottom when history changes
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, isBooting]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (isBooting) return;

        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        let output: React.ReactNode = null;

        switch (cmd) {
            case 'help':
                output = (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pl-4 border-l-2 border-dark-border py-2 my-2 space-y-1">
                        <p><span className="text-neon-green w-20 inline-block">about</span> : Display personal information & bio.</p>
                        <p><span className="text-neon-green w-20 inline-block">skills</span> : List technical stack and tools.</p>
                        <p><span className="text-neon-green w-20 inline-block">projects</span> : Show recent featured projects.</p>
                        <p><span className="text-neon-green w-20 inline-block">clear</span> : Clear the terminal output.</p>
                        <p><span className="text-neon-green w-20 inline-block">exit</span> : Close the terminal window.</p>
                    </motion.div>
                );
                break;
            case 'about':
                output = (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="py-2 my-2">
                        <div className="border border-dark-border p-4 rounded bg-dark-bg/50 inline-block mb-4">
                            <h3 className="text-center font-bold text-text-primary mb-2 border-b border-dark-border pb-2">ABOUT ME</h3>
                            <table className="w-full text-left">
                                <tbody>
                                    <tr><td className="pr-8 text-text-secondary py-1">Name:</td><td className="text-text-primary">Sameer Shedge</td></tr>
                                    <tr><td className="pr-8 text-text-secondary py-1">Role:</td><td className="text-text-primary">Full Stack Developer & AI/ML Enthusiast</td></tr>
                                    <tr><td className="pr-8 text-text-secondary py-1">Location:</td><td className="text-text-primary">Mumbai, India</td></tr>
                                    <tr><td className="pr-8 text-text-secondary py-1">OS:</td><td className="text-blue-400">Windows</td></tr>
                                    <tr><td className="pr-8 text-text-secondary py-1">Status:</td><td className="text-neon-green flex items-center">Available for work <span className="w-1.5 h-1.5 rounded-full bg-neon-green ml-2 animate-pulse"></span></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="max-w-xl text-text-secondary leading-relaxed">
                            I'm a Full Stack Developer and AI/ML Enthusiast currently pursuing B.Tech in Information Technology.
                            I enjoy building scalable web applications, working on backend systems, and exploring intelligent solutions using machine learning.
                        </p>
                    </motion.div>
                );
                break;
            case 'skills':
                output = (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2 my-2 text-text-secondary space-y-2">
                        <p><span className="text-orange-400 w-32 inline-block">Languages:</span> Java, JavaScript / TypeScript, Python, HTML/CSS</p>
                        <p><span className="text-blue-400 w-32 inline-block">Frameworks:</span> React, Node.js, Express, Tailwind CSS, Spring Boot</p>
                        <p><span className="text-neon-green w-32 inline-block">Tools & DBs:</span> Git, MongoDB, MySQL, Postman, Docker</p>
                    </motion.div>
                );
                break;
            case 'projects':
                output = (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2 my-2 space-y-4">
                        <div>
                            <p className="text-text-primary font-bold">- Photographer-website</p>
                            <p className="text-text-secondary">Responsive photography portfolio (HTML, CSS, JS)</p>
                        </div>
                        <div>
                            <p className="text-text-primary font-bold">- Fashion-recommendation-system-</p>
                            <p className="text-text-secondary">AI-driven fashion engine (Python, AI/ML)</p>
                        </div>
                        <div>
                            <p className="text-text-primary font-bold">- Employee-salary-prediction</p>
                            <p className="text-text-secondary">Machine Learning predictor model (Python, Data Science)</p>
                        </div>
                        <div>
                            <p className="text-text-primary font-bold">- ayurvedic-HomeDiet-yoga-assistant</p>
                            <p className="text-text-secondary">Digital assistant for Ayurvedic diet & Yoga.</p>
                        </div>
                    </motion.div>
                );
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            case 'exit':
                onClose();
                setInput('');
                return;
            default:
                output = (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 py-1">
                        Command not found: {cmd}. Type <span className="text-neon-green">'help'</span> for a list of commands.
                    </motion.p>
                );
        }

        setHistory((prev) => [...prev, { command: cmd, output }]);
        setInput('');
    };

    const Prefix = () => (
        <span className="text-blue-400 font-bold mr-2 whitespace-nowrap">
            sameer@windows-ai:<span className="text-neon-green">~</span>$
        </span>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-[70vh] rounded-xl shadow-2xl flex flex-col font-mono text-sm sm:text-base overflow-hidden border border-dark-border bg-dark-bg"
                    >
                        {/* Header/Titlebar */}
                        <div className="h-10 bg-dark-card border-b border-dark-border flex items-center justify-between px-4 select-none">
                            <div className="flex space-x-2">
                                <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer" />
                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer" />
                            </div>
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center text-xs text-text-secondary">
                                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                                sameer@windows-ai:~
                            </div>
                            <div className="flex text-text-secondary space-x-3">
                                <Minus size={14} className="hover:text-text-primary cursor-pointer" />
                                <Square size={12} className="hover:text-text-primary cursor-pointer" />
                                <X size={14} onClick={onClose} className="hover:text-red-400 cursor-pointer" />
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div
                            className="flex-1 p-4 overflow-y-auto"
                            onClick={() => inputRef.current?.focus()}
                        >
                            {history.map((record, idx) => (
                                <div key={idx} className="mb-2">
                                    {record.command && (
                                        <div className="flex">
                                            <Prefix />
                                            <span className="text-text-primary">{record.command}</span>
                                        </div>
                                    )}
                                    {record.output}
                                </div>
                            ))}

                            {/* Only show prompt when not booting */}
                            {!isBooting && (
                                <form onSubmit={handleCommand} className="flex mt-2">
                                    <Prefix />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        className="flex-1 bg-transparent border-none outline-none text-text-primary caret-neon-green"
                                        spellCheck={false}
                                        autoComplete="off"
                                        autoFocus
                                    />
                                </form>
                            )}
                            <div ref={bottomRef} className="pb-4" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TerminalModal;
