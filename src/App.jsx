import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

// Data Import
import content from './data/content';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 antialiased selection:bg-rose-200 selection:text-rose-900 font-sans">
      <Navbar name={content.personalInfo.name} />

      <main>
        <Hero data={content.personalInfo} />
        <Experience experiences={content.experiences} />
        <Projects projects={content.projects} />
        <Certificates certificates={content.certificates} />
      </main>

      <Footer contact={content.personalInfo.contact} />
    </div>
  );
}

export default App;
