import React from 'react';
import { ExternalLink, Github, FolderHeart } from 'lucide-react';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-rose-gold mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        A selection of my technical projects and experiments.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[350px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 border border-slate-100 group flex flex-col"
                        >
                            <div className="h-48 bg-rose-50 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-rose-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <FolderHeart size={48} className="text-rose-200 group-hover:scale-110 transition-transform duration-300" />
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-rose-gold transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-rose-gold transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
