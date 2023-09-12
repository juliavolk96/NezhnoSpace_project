import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSliderControls from './CustomSliderControls';

function MainSlider() {
  const MainSliderText = [
    [
      'я боюсь, что люди отвернутся от меня',
      'я убеждена, что непривлекательная и малоценная в сравнении с кем-то',
      'я заедаю эмоции, будь-то радость, боль, страх или гнев',
      'соглашаюсь с чужим мнением, даже если знаю, что они неправы',
      'я подстраиваюсь под социум, чтобы не столкнуться с неодобрением и критикой',
      'я боюсь, что кто-то заметит мои недостатки',
    ],
    [
      'я постоянно сомневаюсь в себе',
      'я сделаю всё, чтобы не чувствовать себя брошенной или одинокой',
      'я борюсь с проблемами с помощью переедания, сигарет, алкоголя, секса',
      'я постоянно ощущаю тревогу, но не знаю её причину',
      'ем до ощущения дискомфорта',
    ],
    [
      'у меня есть проблемы со здоровьем, нерегулярный цикл',
      'я зациклена на фигуре, обеспокоена своим внешним видом',
      'я стремлюсь к совершенству, озабочена деталями, планами, чёткими установками',
      'часто думаю о весе и форме своего тела',
      'я педантичная, следую правилам социума и своим внутренним',
      'я злюсь на себя, если нарушаю свои пищевые правила',
    ],
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [activeIndexes, setActiveIndexes] = useState(
    MainSliderText.map(() => new Set()),
  );

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

  const handleItemClick = (groupIndex, itemIndex) => {
    const newActiveIndexes = [...activeIndexes];
    if (newActiveIndexes[groupIndex].has(itemIndex)) {
      newActiveIndexes[groupIndex].delete(itemIndex);
    } else {
      newActiveIndexes[groupIndex].add(itemIndex);
    }
    setActiveIndexes(newActiveIndexes);
  };

  const isItemActive = (groupIndex, itemIndex) => (
    activeIndexes[groupIndex].has(itemIndex)
  );

  return (
    <div>
      <CustomSliderControls onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
      <Slider className='slick-sliders' {...settings} ref={sliderRef}>
        {MainSliderText.map((itemGroup, groupIndex) => (
          <div className='it-bothers-me-group' key={groupIndex}>
            {itemGroup.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`it-bothers-me-item ${
                  isItemActive(groupIndex, itemIndex) ? 'active' : ''
                }`}
                onClick={() => handleItemClick(groupIndex, itemIndex)}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainSlider;
