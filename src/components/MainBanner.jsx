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
        Платформа психологической поддержки на основе Искусственного Интеллекта.
      </p>
      <p className='intro-subtitle'>
        Мы здесь, чтобы помочь справиться с расстройством пищевого поведения и выгоранием.
      </p>
      <p className='intro-subtitle'>
        Наши алгоритмы формируют подборку упражнений с учетом твоих конкретных тревог и сложностей.
      </p>
      <div>
        <MainIntro />
      </div>
    </div>
  );
}

export default MainBanner;
