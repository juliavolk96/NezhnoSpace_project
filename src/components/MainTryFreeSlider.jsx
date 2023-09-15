import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSliderControls from './CustomSliderControls';
import './css/tryFreeSlider.css';

function MainTryFreeSlider() {
  const slidesData = [
    {
      imageSrc: 'путь_к_изображению1',
      title: 'Общество: стандарты и культура красоты',
      subtitle: 'Качественная жизнь = полноценная жизнь, которую мы достойны и способны прожить. Качественная жизнь — это ресурсное состояние, в котором мы способны позаботиться не только о себе, но и о своих близких.',
      audioSrc: 'путь_к_аудио1.mp3',
    },
    {
      imageSrc: 'путь_к_изображению1',
      title: 'Общество: стандарты и культура красоты',
      subtitle: 'Качественная жизнь = полноценная жизнь, которую мы достойны и способны прожить. Качественная жизнь — это ресурсное состояние, в котором мы способны позаботиться не только о себе, но и о своих близких.',
      audioSrc: 'путь_к_аудио1.mp3',
    },
    {
      imageSrc: 'путь_к_изображению1',
      title: 'Общество: стандарты и культура красоты',
      subtitle: 'Качественная жизнь = полноценная жизнь, которую мы достойны и способны прожить. Качественная жизнь — это ресурсное состояние, в котором мы способны позаботиться не только о себе, но и о своих близких.',
      audioSrc: 'путь_к_аудио1.mp3',
    },
    {
      imageSrc: 'путь_к_изображению1',
      title: 'Общество: стандарты и культура красоты',
      subtitle: 'Качественная жизнь = полноценная жизнь, которую мы достойны и способны прожить. Качественная жизнь — это ресурсное состояние, в котором мы способны позаботиться не только о себе, но и о своих близких.',
      audioSrc: 'путь_к_аудио1.mp3',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '240px',
    beforeChange: (currentSlide, nextSlide) => {
      setActiveSlide(nextSlide);
    },
  };

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
    <div className='try-free-slider-container'>
      <CustomSliderControls onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
      <Slider className='slide-sliders' {...settings} ref={sliderRef}>
        {slidesData.map((slide, index) => (
          <div
            className={`try-free-slide ${index === activeSlide ? 'active-slide' : 'blur-slide'}`}
            key={index}
          >
            <div className='picture-and-theme'>
              <picture className='slide-image'>
                {/* <img src={slide.imageSrc} alt={`Slide ${index}`} /> */}
              </picture>
            </div>
            <div className='try-free-slide-description'>
              <h3 className='slide-description-title'>{slide.title}</h3>
              <div className='slide-description-subtitle'>{slide.subtitle}</div>
            </div>
            <div className='slide-audio'></div>
            <button className='blue-button'>
              <a href="#">Попробовать</a>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainTryFreeSlider;
