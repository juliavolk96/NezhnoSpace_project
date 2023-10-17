import React from 'react';
import aboutImage from '../images/photo.png';
import aboutImageMobile from '../images/photo-mobile.png';
import './css/mainAbout.css';

function MainAbout() {
  return (
    <section className='main-about'>
      <picture className='about-image'>
        <source srcSet={aboutImageMobile} type="image/png" media="(max-width: 1024px)" />
        <img src={aboutImage} alt="girl" />
      </picture>
      <div className='about-wrap'>
        <h2 className='about-wrap-title'>Мы здесь, чтобы&shy;
        ты прошла свой путь нежно</h2>
        <div className='about-wrap-description'>
          <p className='about-wrap-description-text'>Расстройство пищевого поведения влияет на многие аспекты жизни
            и справиться с трудностями самостоятельно - не всегда получается.</p>
           <p className='about-wrap-description-text'>Помни, поддержка - важное звено на пути к переменам.</p>
           <p className='about-wrap-description-text'>Наша платформа создана специально, чтобы быть рядом с тобой в любое время.</p>
        </div>
      </div>
    </section>
  );
}

export default MainAbout;
