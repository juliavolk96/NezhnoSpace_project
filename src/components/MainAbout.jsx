import React from 'react';
import aboutImage from '../images/photo.png';
import aboutImageMobile from '../images/photo-mobile.png';

function MainAbout() {
  return (
    <section className='main-about'>
      <picture className='about-image'>
        <source srcSet={aboutImage} type="image/png" />
        <img src={aboutImageMobile} alt="girl" />
      </picture>
      <div className='about-wrap'>
        <h2 className='about-wrap-title'>Мы здесь, чтобы<br />
        ты прошла свой путь нежно</h2>
        <div className='about-wrap-description'>
          <p>Расстройство пищевого поведения влияет на многие аспекты жизни,<br />
            и справиться с трудностями самостоятельно - не всегда получается.</p>
           <p>Помни, поддержка - важное звено на пути к переменам.</p>
           <p>Наша платформа создана специально, чтобы быть рядом с тобой в любое время.</p>
        </div>
      </div>
    </section>
  );
}

export default MainAbout;
