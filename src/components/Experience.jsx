import React from 'react';

const Experience = ({ experiences }) => {
    return (
        <section id="experience" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-rose-gold mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-rose-100 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-rose-gold transition-colors">
                                        {exp.role}
                                    </h3>
                                    <h4 className="text-lg text-slate-500 font-medium">{exp.company}</h4>
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <span className="inline-block px-4 py-1.5 bg-rose-50 text-rose-gold text-sm font-bold rounded-full">
                                        {exp.date}
                                    </span>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed font-light">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
