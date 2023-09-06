import React from 'react';

function MainAbout() {
  return (
    <section className='main-about'>
      <picture></picture>
      <div className='about-wrap'>
        <h2 className='about-wrap-title'>Мы здесь, чтобы ты прошла свой путь нежно</h2>
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
