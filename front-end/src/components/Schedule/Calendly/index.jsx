import React from "react";
import { CalendlyContainer } from "./CalendlyElements";

const Calendly = () => {
  return (
    <CalendlyContainer>
      <iframe
        src="https://calendly.com/henrysbarbershop/haircut"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </CalendlyContainer>
  );
};

export default Calendly;
