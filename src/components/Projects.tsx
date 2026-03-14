import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import React from 'react';

type Project = {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass-card p-6 flex flex-col h-full group ${project.featured ? 'border-neon-green/30' : ''}`}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-dark-bg border border-dark-border rounded-lg text-neon-green group-hover:scale-110 transition-transform">
                    <Code size={20} />
                </div>
                <div className="flex space-x-3 text-text-secondary">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-neon-green transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-neon-green transition-colors">
                {project.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-border/40">
                {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-dark-bg/80 text-text-muted rounded border border-dark-border">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects: Project[] = [
        {
            title: 'Photographer-website',
            description: 'A responsive photography website created to showcase high-quality images and portfolios.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Sameershedge77/Photographer-website',
            featured: true
        },
        {
            title: 'Fashion-recommendation-system-',
            description: 'An AI-driven fashion recommendation engine designed to suggest clothing items based on user preferences and image analysis.',
            tags: ['Python', 'AI/ML', 'Computer Vision'],
            github: 'https://github.com/Sameershedge77/Fashion-recommendation-system-'
        },
        {
            title: 'Employee-salary-prediction',
            description: 'A Machine Learning model built to predict employee salaries based on various professional factors and historical dataset analysis.',
            tags: ['Python', 'Machine Learning', 'Data Science'],
            github: 'https://github.com/Sameershedge77/Employee-salary-prediction',
            featured: true
        },
        {
            title: 'ayurvedic-HomeDiet-yoga-assistant',
            description: 'An intelligent digital assistant providing personalized Ayurvedic diet recommendations and interactive Yoga guidance.',
            tags: ['JavaScript'],
            github: 'https://github.com/Sameershedge77/ayurvedic-HomeDiet-yoga-assistant'
        }
    ];

    return (
        <section id="projects" className="py-20 border-t border-dark-border/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-text-primary flex items-center">
                        <span className="text-neon-green mr-3">#</span> Featured Projects
                    </h2>
                    <p className="text-text-secondary mt-2">Some things I've built recently</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
