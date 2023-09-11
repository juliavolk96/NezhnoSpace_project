import React from 'react';
import './arrows_style.css';

function CustomSliderControls({ onPrevClick, onNextClick }) {
  return (
    <div>
      <button className="arrow-left" onClick={onPrevClick}></button>
      <button className="arrow-right" onClick={onNextClick}></button>
    </div>
  );
}

export default CustomSliderControls;
