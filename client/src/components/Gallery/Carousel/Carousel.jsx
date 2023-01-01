import React, { useState, useEffect } from 'react';
import { CarouselData } from './CarouselData';

const CarouselSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
      {CarouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            <div className="slider-container">
              {index === current ? (
                <img src={slide.image} alt="haircut pic" className="image" />
              ) : null}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CarouselSlider;
