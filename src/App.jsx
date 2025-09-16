import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Download />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
