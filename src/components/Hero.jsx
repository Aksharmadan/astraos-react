import React from 'react';

export default function Hero() {
  return (
    <section className="hero" role="region" aria-label="AstraOS hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Welcome to AstraOS</h1>
          <p className="lead">A lightweight, secure OS built for creators, developers, and explorers.</p>
          <div className="hero-cta">
            <a href="#download" className="btn primary">Download AstraOS</a>
            <a href="#learn" className="btn ghost">Learn more</a>
          </div>
        </div>

        <div className="hero-image" aria-hidden="true">
          {/* Prefer a local asset in public/assets; fallback to online if missing */}
          <picture>
            <source srcSet="/assets/hero-illustration.jpg" />
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=60"
              alt="AstraOS desktop illustration"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
