import React from 'react';
import '../assets/Style.css';

export default function legends({ legends }) {
  return (
    <div className="legend">
      <p>{legends}</p>
    </div>
  );
}
