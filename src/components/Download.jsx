import React from 'react';

export default function Download() {
  return (
    <section id="download" className="download">
      <div className="container">
        <h2>Download AstraOS</h2>
        <p>Get started with AstraOS today. Choose your platform:</p>
        <div className="download-buttons">
          <a className="btn primary" href="#">⬇ Intel / AMD (64-bit)</a>
          <a className="btn ghost" href="#">⬇ ARM (Raspberry Pi)</a>
        </div>
        <small className="download-note">
          * AstraOS is free and open-source. No licenses required.
        </small>
      </div>
    </section>
  );
}
