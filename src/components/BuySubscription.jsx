import React from 'react';
import './css/buySubscription.css';

function BuySubscription() {
  const subscriptionOptions = [
    {
      duration: '1 месяц',
      price: '3000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '3000 ₽ / мес.',
      paymentId: '944',
    },
    {
      duration: '6 месяцев',
      price: '15000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '2500 ₽ / мес.',
      paymentId: '945',
    },
    {
      duration: '1 год',
      price: '25000 ₽',
      trial: 'первые 7 дней за 7 ₽',
      pricePerMonth: '2084 ₽ / мес.',
      paymentId: '946',
    },
  ];

  return (
    <section className="buy-subscription-section">
      <div className="buy-subscription-wrap">
        <h2 className="buy-subscription-title">Начни заботиться о себе с Нежно</h2>
        <div className="prices-container">
          <ul className="prices-list">
            {subscriptionOptions.map((option) => (
              <li key={option.paymentId} className="buy-subscription-items">
                <div className="buy-subscription-item-wrap">
                  {/* <p className="buy-subscription-item-title"></p> */}
                  <div className="buy-subscription-item-info">
                    <span className="buy-subscription-item-duration">{option.duration}</span>
                    <span className="price-item">{option.price}</span>
                    {/* <span className="buy-subscription-item-trial">{option.trial}</span>
                    <span className="price-month">{option.pricePerMonth}</span> */}
                  </div>
                </div>
                <form action="payment" method="post">
                  <input type="hidden" value={option.paymentId} name="payment-id" />
                  <button className='payment-button' name="payment-button" type="submit">Хочу подписку</button>
                </form>
              </li>
            ))}
          </ul>
          <p className="buy-sunscription-text">
            Пока не готовы начать?&nbsp;<a href="/"><span className="text-color-violet"> Узнайте больше о подписке Нежно Space</span></a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default BuySubscription;
