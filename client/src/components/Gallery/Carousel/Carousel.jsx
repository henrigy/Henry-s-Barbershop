import React, { useState, useEffect } from 'react';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { CarouselData } from './CarouselData';

const CarouselSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <SlArrowLeft className="left-arrow" onClick={prevSlide} />
      <SlArrowRight className="right-arrow" onClick={nextSlide} />
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="haircut pic" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CarouselSlider;
