import React from 'react';

const Card = ({ title, children, icon }) => (
  <article className="card">
    <div className="card-head">
      <div className="card-icon" aria-hidden>{icon}</div>
      <h3>{title}</h3>
    </div>
    <p>{children}</p>
  </article>
);

export default function Features() {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="grid">
            <Card title="Workflow" icon="⚡">
              Fast navigation and workspace organization for focused productivity.
            </Card>
            <Card title="Compatibility" icon="🔌">
              Built-in tools and package support for developers and creators.
            </Card>
            <Card title="Security" icon="🔒">
              Full-disk encryption and easy updates keep your data safe.
            </Card>
          </div>
        </div>
      </section>

      <section id="why" className="why">
        <div className="container">
          <h2>Why AstraOS?</h2>
          <p>Customizable, fast, and designed with developers & creatives in mind.</p>
        </div>
      </section>
    </>
  );
}
