import React from 'react';
import '../assets/Style.css';

export default function images({ bookImages }) {
  return (
    <div className="imageBook">
      <img src={bookImages} alt="images" />
    </div>
  );
}
