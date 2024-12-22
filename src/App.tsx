import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { PageBanner } from './components/PageBanner/PageBanner';
import { AboutMe } from './components/AboutMe.tsx/AboutMe';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Project } from './components/Project/Project';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <PageBanner/>
      <AboutMe />
      <Experience />
      <Project/>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
