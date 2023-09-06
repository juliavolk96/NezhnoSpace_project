import React from 'react';

function MainSubscription() {
  return (
    <section className='main-subscription-wrap'>
      <h2 className='subscription-title'>Что ты получишь в подписке?</h2>
      <div className='subscription-subtitle'>
        <p>Приобретая подписку, ты получаешь доступ к <span className='text-color-violet'>личному кабинету</span>.</p>
        <p>Затем, на основе опроса, разработанные нами алгоритмы<br />
        сформируют для тебя индивидуальную подборку упражнений, практик и рекомендаций.
        <br /> Ты можешь корректировать ее, отмечая понравившиеся материалы. </p>
      </div>
      <div className='subscription-user-path'></div>
      <div className='subscripton-offers-wrap'>
        <div className='subscription-daily-practices'>
          <h3 className='subscription-offers-title'>Ежедневные практики</h3>
          <p className='subscription-offers-subtitle'>
            Сформируют у тебя привычку замечать свои желания,<br />
            эмоции, потребности, сигналы голода и насыщения.
          </p>
        </div>
        <div className='subscription-columns'>
          <div className='subscription-themes'>
            <h3 className='subscription-offers-title'>Темы</h3>
            <div className='subscription-offers-subtitle-wrap'>
              <p className='subscription-offers-subtitle'>
                У нас есть более 30 тем, из которых ты сможешь выбрать те,<br />
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
                Мы не будем торопить тебя с прохождением тем,<br />
                ты можешь оставаться в выбранной теме <span className='text-bold'>столько, сколько считаешь нужным</span>.
              </p>
            </div>
          </div>
          <div className='subscription-exercises'>
            <h3 className='subscription-offers-title'>Упражнения</h3>
            <p className='subscription-offers-subtitle'>
              Методики гештальта, когнитивно-поведенческой, семейной<br />
              и телесно-ориентированной терапии подбираются для тебя искусственным интеллектом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSubscription;
