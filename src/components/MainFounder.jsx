import React from 'react';
import './css/mainFounder.css';
import posterImage from '../images/youtube.png';

function MainFounder() {
  return (
    <section className='main-founder-wrap'>
      <h2 className='main-founder-title'>Позволь познакомить тебя с основательницей платформы</h2>
      <div className='founder-description-container'>
        <div className='founder-video video-container'>
        <iframe className='video' controls poster={posterImage} src="https://video" title="Упс! ЧТо-то пошло не так." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className='description-wrap'>
          <h3 className='founder-description-title'>Ксения Ларькина</h3>
          <div className='founder-description-list-container'>
            <ul className='founder-description-list'>
              <li>Практикующий психолог</li>
              <li>Телесно-ориентированный психотерапев</li>
              <li>Победитель гранта на научные исследования
                в сфере психологии и искусственного интеллекта</li>
            </ul>
            <ul className='founder-description-list'>
              <li>Спикер Сколково</li>
              <li>Ментор Сбер500</li>
              <li>Более 10 лет в теме расстройств пищевого поведения</li>
              <li>Проходит постоянную супервизию</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFounder;
