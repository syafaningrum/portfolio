import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = ({ data }) => {
    return (
        <section id="about" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-rose-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 fade-in-up">
                        <span className="text-rose-gold font-bold tracking-wider uppercase text-sm mb-2 block">
                            Welcome to my portfolio
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                            Hello, I'm <br />
                            <span className="text-rose-gold relative inline-block">
                                {data.name}
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-slate-600 mb-8 italic">
                            {data.role}
                        </h2>
                        <p className="text-slate-600 max-w-xl text-lg mb-10 leading-relaxed font-light">
                            {data.bio}
                        </p>

                        <div className="flex flex-wrap gap-4 items-center">
                            <a
                                href={data.resumeLink}
                                download
                                className="bg-rose-gold hover:bg-rose-gold-dark text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 flex items-center gap-2 transform hover:-translate-y-1"
                            >
                                <Download size={18} />
                                Download CV
                            </a>

                            <div className="flex gap-6 items-center ml-4 border-l border-slate-300 pl-6 h-10">
                                <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-gold transition-all hover:scale-110">
                                    <Github size={24} />
                                </a>
                                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-gold transition-all hover:scale-110">
                                    <Linkedin size={24} />
                                </a>
                                <a href={`mailto:${data.contact.email}`} className="text-slate-400 hover:text-rose-gold transition-all hover:scale-110">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center relative">
                        <div className="w-72 h-72 md:w-96 md:h-96 bg-rose-100 rounded-full flex items-center justify-center relative overflow-hidden ring-8 ring-white shadow-2xl">
                            {/* Replace with actual image later */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400 font-serif">
                                <span className="text-2xl">Profile Image</span>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-gold-light rounded-full blur-3xl opacity-40"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
