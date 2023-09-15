import React from 'react';
import MainGreetings from './MainGreetings.jsx';
import MainIntro from './MainIntro.jsx';
import './css/mainBanner.css';

function MainBanner() {
  return (
    <div className='main-banner'>
      <div>
        <MainGreetings />
      </div>
      <div className='main-intro-container'>
        <MainIntro />
      </div>
    </div>
  );
}

export default MainBanner;
