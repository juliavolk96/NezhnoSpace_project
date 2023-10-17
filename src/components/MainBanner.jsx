import React from 'react';
import MainGreetings from './MainGreetings.jsx';
import MainIntro from './MainIntro.jsx';
import './css/mainBanner.css';

function MainBanner() {
  return (
    <section className='main-banner'>
      <div className='main-greetings-container'>
        <MainGreetings />
      </div>
      <div className='main-intro-container'>
        <MainIntro />
      </div>
    </section>
  );
}

export default MainBanner;
