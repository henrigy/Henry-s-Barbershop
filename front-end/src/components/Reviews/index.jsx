import React, { useState } from "react";
import { Button } from "../ButtonElement";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  RightWrap,
  ReviewsBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./ReviewsElements";

const Reviews = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer id={"reviews"}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Reviews</TopLine>
                <Heading>Let us know about your experience</Heading>
                <Subtitle>
                  Please comment about your experience, upload a picture, and
                  leave us your thoughts!
                </Subtitle>
                <ReviewsBtnWrapper>
                  <Button
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    POST A REVIEW {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </ReviewsBtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <RightWrap>{/* can put in additional elements here */}</RightWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Reviews;
