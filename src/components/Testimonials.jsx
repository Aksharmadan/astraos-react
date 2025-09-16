import React from 'react';

const quotes = [
  {
    name: "Arjun",
    role: "Developer",
    text: "AstraOS transformed my workflow — it’s fast, stable, and secure."
  },
  {
    name: "Priya",
    role: "Designer",
    text: "The UI feels minimal yet powerful. I love building on AstraOS!"
  },
  {
    name: "Ravi",
    role: "Student",
    text: "Perfect for learning — AstraOS makes coding fun and simple."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What people say</h2>
        <div className="testimonial-grid">
          {quotes.map((q, i) => (
            <blockquote key={i} className="testimonial">
              <p>“{q.text}”</p>
              <footer>
                <strong>{q.name}</strong> — {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
