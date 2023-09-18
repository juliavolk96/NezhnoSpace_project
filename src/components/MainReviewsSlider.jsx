import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSliderControls from './CustomSliderControls';
import './css/mainReviews.css';

function MainReviewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);
  const slidesReviewsData = [
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
    {
      author: 'Имя автора, возраст',
      text: 'Здесь должен быть текст',
      time: 'Дата',
    },
  ];

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div reviwes-slider-container>
      <CustomSliderControls onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
      <Slider className='reviews-slider' {...settings} ref={sliderRef}>
        {slidesReviewsData.map((slide, index) => (
          <div
            className='review-slide'
            key={index}
          >
            <div className='reviews-item'>
              <h3 className='reviews-author-age'>{slide.author}</h3>
              <hr />
              <p className='reviews-text'>{slide.text}</p>
              <span className='reviews-time'>{slide.time}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainReviewsSlider;
