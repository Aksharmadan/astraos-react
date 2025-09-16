import React, { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="/">AstraOS</a>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-expanded={open}>
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#why" onClick={() => setOpen(false)}>Why AstraOS</a>
          <a href="#download" className="btn small" onClick={() => setOpen(false)}>Download</a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(s => !s)}
        >
          <span className="hamburger" />
        </button>
      </div>
    </header>
  );
}
