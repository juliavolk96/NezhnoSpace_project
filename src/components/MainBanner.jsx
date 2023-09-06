import React from 'react';
import MainIntro from './MainIntro.jsx';

function MainBanner() {
  return (
    <div className='main-banner intro-wrap'>
      <h1 className='intro-title'>
        <p>Здравствуй,</p>
        <span>это Нежно Space</span>
      </h1>
      <p className='intro-subtitle'>
        Платформа психологической поддержки
        на основе Искусственного Интеллекта. Мы здесь, чтобы помочь справиться с расстройством
        пищевого поведения и выгоранием. Наши алгоритмы формируют подборку упражнений
        с учетом твоих конкретных тревог и сложностей.
      </p>
      <div>
        <MainIntro />
      </div>
    </div>
  );
}

export default MainBanner;
