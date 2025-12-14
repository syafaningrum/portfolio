import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ contact }) => {
    return (
        <footer id="contact" className="py-12 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                <h2 className="text-2xl font-serif font-bold mb-6">Let's Connect</h2>

                <div className="flex space-x-8 mb-8">
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-gold transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-rose-gold transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-rose-gold transition-colors transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                </div>

                <div className="w-full border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm font-light flex items-center justify-center gap-2">
                        Built with <Heart size={14} className="text-rose-gold fill-current" /> by {contact.email.split('@')[0]}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
