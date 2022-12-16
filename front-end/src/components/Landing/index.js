import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElement";
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
  LandingH1,
  LandingP,
  LandingBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./LandingElements";

const LandingSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <LandingContainer>
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandingBg>
      <LandingContent>
        <LandingH1>This is Henry's Barbershop</LandingH1>
        <LandingP>Schedule your next haircut today</LandingP>
        <LandingBtnWrapper>
          <Button
            to="schedule"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            BOOK NOW {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </LandingBtnWrapper>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
