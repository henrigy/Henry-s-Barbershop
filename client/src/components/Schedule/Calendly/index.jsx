import React from 'react';
import { CalendlyContainer } from './CalendlyElements';

const Calendly = () => {
  return (
    <CalendlyContainer>
      <iframe
        title="Calendly"
        src="https://calendly.com/henrysbarbershop/haircut"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ borderRadius: '15px' }}
      ></iframe>
    </CalendlyContainer>
  );
};

export default Calendly;
