import React from 'react';

export default function Showcase() {
  return (
    <section className="showcase">
      <div className="container showcase-inner">
        <div className="showcase-text">
          <h2>AstraOS in Action</h2>
          <p>
            Clean design, powerful tools, and a productive environment.
            Take a look at the AstraOS desktop in action.
          </p>
        </div>
        <div className="showcase-img">
          <img src="/assets/hero-mock.jpg" alt="AstraOS desktop screenshot" />
        </div>
      </div>
    </section>
  );
}
