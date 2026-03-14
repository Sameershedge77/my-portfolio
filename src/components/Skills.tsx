import { motion } from 'framer-motion';
import React from 'react';

type Skill = {
    name: string;
    icon?: React.ReactNode;
    color?: string;
};

type SkillCategory = {
    title: string;
    items: Skill[];
};

const SkillBadge = ({ skill }: { skill: Skill }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="flex items-center px-4 py-2 bg-dark-card border border-dark-border rounded-lg text-sm text-text-primary hover:border-text-secondary transition-colors"
    >
        {skill.icon && <span className="mr-2.5" style={{ color: skill.color }}>{skill.icon}</span>}
        <span className="font-mono">{skill.name}</span>
    </motion.div>
);

const Skills = () => {
    const categories: SkillCategory[] = [
        {
            title: 'Languages',
            items: [
                { name: 'Java', color: '#b07219', icon: '☕' },
                { name: 'Python', color: '#3572A5', icon: '🐍' },
                { name: 'SQL', color: '#4479A1', icon: '🗄️' },
                { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' }
            ]
        },
        {
            title: 'Web Technologies',
            items: [
                { name: 'HTML5 / CSS3', color: '#e34c26', icon: '</>' },
                { name: 'React.js', color: '#61DAFB', icon: '⚛️' },
                { name: 'Bootstrap', color: '#7952B3', icon: '🟪' }
            ]
        },
        {
            title: 'Tools & Databases',
            items: [
                { name: 'MySQL', color: '#4479A1', icon: '🐬' },
                { name: 'Git & GitHub', color: '#F05032', icon: '🐙' },
                { name: 'VS Code', color: '#007ACC', icon: '💻' },
                { name: 'Jupyter Notebook', color: '#F37626', icon: '📓' }
            ]
        },
        {
            title: 'Specialized Areas & Others',
            items: [
                { name: 'AI / ML', color: '#10b981', icon: '🤖' },
                { name: 'GenAI Tools', color: '#8b5cf6', icon: '🧠' },
                { name: 'Full Stack Dev', color: '#3b82f6', icon: '🌐' }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 border-t border-dark-border/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <h2 className="text-2xl font-bold mb-10 text-text-primary flex items-center">
                    <span className="text-neon-green mr-3">#</span> Technical Skills
                </h2>

                <div className="space-y-12">
                    {categories.map((category, idx) => (
                        <div key={idx} className="relative pl-6 border-l border-dark-border/60 ml-3">
                            <div className="absolute w-3 h-3 bg-dark-bg border-2 border-neon-green rounded-full -left-[7px] top-1.5 shadow-[0_0_8px_rgba(0,255,186,0.5)]"></div>

                            <h3 className="text-lg font-medium text-neon-green mb-6 leading-none pt-1">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <SkillBadge key={i} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
