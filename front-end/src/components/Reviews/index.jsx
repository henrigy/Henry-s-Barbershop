import React from "react";

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
} from "./ReviewsElements";

const Reviews = () => {
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
