import React from 'react';
import MainTryFreeSlider from './MainTryFreeSlider.jsx';
import './css/tryFreeSlider.css';

function MainTryFree() {
  return (
    <section className='try-free-wrap'>
      <h2 className='try-free-title'>Попробовать бесплатно:</h2>
       <MainTryFreeSlider />
    </section>
  );
}

export default MainTryFree;
