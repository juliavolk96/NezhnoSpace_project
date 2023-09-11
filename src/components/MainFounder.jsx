import React from 'react';

function MainFounder() {
  return (
    <section className='main-founder-wrap'>
      <div className='founder-description-container'>
        <div className='founser-video video-container'></div>
        <div className='description-wrap'>
          <h3 className='founder-description-title'>Ксения Ларькина</h3>
          <ul className='description-list'>
            <li>Практикующий психолог</li>
            <li>Телесно-ориентированный психотерапев</li>
            <li>Победитель гранта на научные исследования<br />
              в сфере психологии и искусственного интеллекта</li>
            <li>Спикер Сколково</li>
            <li>Ментор Сбер500</li>
            <li>Более 10 лет в теме расстройств пищевого поведения</li>
            <li>Проходит постоянную супервизию</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MainFounder;
