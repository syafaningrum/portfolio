import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const Certificates = ({ certificates }) => {
    return (
        <section id="certificates" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Certifications & Awards</h2>
                    <div className="w-20 h-1 bg-rose-gold mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        Professional validations and recognitions.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="group w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Image Thumbnail Area */}
                            <div className="h-48 overflow-hidden relative bg-slate-100">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-rose-50">
                                        <Award size={48} className="text-rose-200" />
                                    </div>
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-rose-gold uppercase tracking-wider">{cert.issuer}</span>
                                    <span className="text-xs text-slate-400 font-mono">{cert.date}</span>
                                </div>

                                <h3 className="text-lg font-bold text-slate-800 mb-4 line-clamp-2" title={cert.title}>
                                    {cert.title}
                                </h3>

                                <div className="mt-auto">
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-rose-gold transition-colors group/link"
                                        >
                                            View Credential
                                            <ExternalLink size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
