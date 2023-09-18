import React from 'react';
import MainReviewsSlider from './MainReviewsSlider.jsx';
import './css/mainReviews.css';

function MainReviews() {
  return (
    <section className='main-reviews-wrap'>
      <h2 className='reviews-title'>Отзывы</h2>
      <div className='reviews-wrap'>
        <MainReviewsSlider />
      </div>
    </section>
  );
}

export default MainReviews;
