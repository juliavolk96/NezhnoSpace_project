import React from 'react';
import MainAbout from './MainAbout.jsx';
import MainBanner from './MainBanner.jsx';
import MainSubscription from './MainSubscription.jsx';
import MainTryFree from './MainTryFree.jsx';
import MainFounder from './MainFounder.jsx';
import MainReviews from './MainReviews.jsx';
import BuySubscription from './BuySubscription.jsx';

function Main() {
  return (
    <div className="main">
      <div className='main-wrap'>
        <MainBanner />
        <MainAbout/>
        <MainSubscription />
        <MainTryFree />
        <MainFounder />
        <MainReviews />
        <BuySubscription />
      </div>
    </div>
  );
}

export default Main;
