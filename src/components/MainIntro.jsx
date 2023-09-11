import React from 'react';
import MainSlider from './MainSlider.jsx';

function MainIntro() {
  return (
    <div className='intro-anxiety'>
      <h2 className='intro-anxiety-title'>Меня тревожит</h2>
      <div className='intro-anxiety-slider'>
        <MainSlider />
      </div>
      <button className='blue-button'>
        <a href="confirm-anxiety">Хочу разобраться!</a>
      </button>
    </div>
  );
}

export default MainIntro;
