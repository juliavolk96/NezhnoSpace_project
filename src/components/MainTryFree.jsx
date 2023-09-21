import React from 'react';
import MainTryFreeSlider from './MainTryFreeSlider.jsx';
import './css/tryFreeSlider.css';

function MainTryFree() {
  return (
    <section className='try-free-wrap'>
      <h2 className='try-free-title'>Попробовать бесплатно</h2>
      <div className='try-free-description'>
        <p>Уверены, что психотерапия должна быть доступна для каждого.<br />
          После регистрации в личном кабинете тебе откроется бесплатный период,
          который даст тебе возможность ознакомиться с нашими методиками и <span className='text-color-violet'>понять,
          что подходит именно тебе</span>.
        </p>
      </div>
       <MainTryFreeSlider />
    </section>
  );
}

export default MainTryFree;
