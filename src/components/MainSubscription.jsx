import React from 'react';
import circle1 from '../images/Rectangle6.png';
import circle2 from '../images/Rectangle7.png';
import circle3 from '../images/Rectangle8.png';
import './css/mainSubscription.css';

function MainSubscription() {
  return (
    <section className='subscription-wrap'>
      <h2 className='subscription-title'>Что ты получишь в подписке?</h2>
      <div className='subscription-subtitle'>
        <p>Приобретая подписку, ты получаешь доступ к <span className='text-color-violet'>личному кабинету</span>.</p>
        <p>Затем, на основе опроса, разработанные нами алгоритмы
        сформируют для тебя индивидуальную подборку упражнений, практик и рекомендаций.&shy;</p>
        <p>Ты можешь корректировать ее, отмечая понравившиеся материалы.</p>
      </div>
      <div className='subscription-user-path'>
        <div className='group-one-image-text'>
          <div className='group-circles'>
            <div className='circle1'>
              <img src={circle1} alt="circle_img" />
            </div>
            <div className='circle2'>
              <img src={circle2} alt="circle_img" />
            </div>
            <div className='circle3'>
              <img src={circle3} alt="circle_img" />
            </div>
          </div>
          <div className='text-under-circle'>
              <p>Опрос</p>
          </div>
        </div>
        <div className='group-two-image-text'>
          <div className='circle-1'>
            <img src={circle1} alt="circle_img" />
          </div>
          <div className='text-under-circle'>
              <p>Темы</p>
          </div>
        </div>
        <div className='group-three-image-text'>
          <div className='circle-2'>
            <img src={circle2} alt="circle_img" />
          </div>
          <div className='text-under-circle'>
              <p>Ежедневные практики</p>
          </div>
        </div>
        <div className='group-four-image-text'>
          <div className='circle-3'>
            <img src={circle3} alt="circle_img" />
          </div>
          <div className='text-under-circle'>
              <p>Упражнения</p>
          </div>
        </div>
      </div>
      <div className='subscripton-offers-wrap'>
        <div className='subscription-columns'>
          <div className='subscription-themes'>
            <h3 className='subscription-offers-title'>Темы</h3>
            <div className='subscription-offers-subtitle-wrap'>
              <p className='subscription-offers-subtitle'>
                У нас есть более 30 тем, из которых ты сможешь выбрать те,
                над которыми хотелось бы поработать, например:
              </p>
              <ul className='subscriptions-themes-list'>
                <li>качество жизни</li>
                <li>самооценка</li>
                <li>отношения</li>
                <li>карьера</li>
                <li>деньги</li>
                <li>семья</li>
                <li>секс</li>
                <li>тело</li>
              </ul>
              <p className='subscription-offers-subtitle'>
                Мы не будем торопить тебя с прохождением тем,
                ты можешь оставаться в выбранной теме <span className='text-bold'>столько, сколько считаешь нужным</span>.
              </p>
            </div>
          </div>
          <div className='subscription-right-block'>
            <div className='subscription-daily-practices'>
              <h3 className='subscription-offers-title'>Ежедневные практики</h3>
              <p className='subscription-offers-subtitle'>
                Сформируют у тебя привычку замечать свои желания,
                эмоции, потребности, сигналы голода и насыщения.
              </p>
            </div>
            <div className='subscription-exercises'>
              <h3 className='subscription-offers-title'>Упражнения</h3>
              <p className='subscription-offers-subtitle'>
                Методики гештальта, когнитивно-поведенческой, семейной
                и телесно-ориентированной терапии подбираются для тебя искусственным интеллектом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSubscription;
