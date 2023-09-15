import React from 'react';
import './css/mainGreetings.css';

function MainGreetings() {
  return (
    <div className='intro-wrap'>
      <h1 className='intro-title'>
        <p>Здравствуй,</p>
        <span>это Нежно Space</span>
      </h1>
      <p className='intro-subtitle'>
          платформа психологической поддержки, которая объединила
          силу искусственного интеллекта с современными методами психотерапии.
      </p>
      <p className='intro-subtitle'>
          Наша цель - помочь тебе справиться с эмоциональным перееданием,
          тревогой о весе, стрессом и негативным отношением к себе.
      </p>
      <p className='intro-subtitle'>
          В этом нам поможет нейросеть, которая каждый месяц будет составлять
          для тебя индивидуальную подборку упражнений, практик и рекомендаций
      </p>
    </div>
  );
}

export default MainGreetings;
