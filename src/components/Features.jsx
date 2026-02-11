import React from 'react';
import './Features.css';

const features = [
  "Real-time updates",
  "Interactive charts",
  "Responsive design",
  "Dark & Light mode",
];

const Features = () => {
  return (
    <section className="features">
      <h3>Key Features</h3>
      <ul>
        {features.map((feat, i) => <li key={i}>{feat}</li>)}
      </ul>
    </section>
  );
};

export default Features;
