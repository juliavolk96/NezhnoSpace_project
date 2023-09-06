import React from 'react';
import MainSlider from './MainSlider.jsx';

function MainIntro() {
  return (
    <div className='intro-anxiety'>
      <h2 className='main-banner intro-anxiety-title'>Меня тревожит</h2>
      <div className='intro-anxiety-slider'>
        <MainSlider />
      </div>
      <div intro-anxiety-button>
        <button className='blue-button'>
          <a href="confirm-anxiety">Хочу разобраться!</a>
        </button>
      </div>
    </div>
  );
}

export default MainIntro;
