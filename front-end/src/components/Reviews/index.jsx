import React, { useState } from "react";
import { Button2 } from "../ButtonElement";
import PostModal from "../PostModal";

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

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
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
                  <Button2
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    onClick={openModal}
                    // spy={true}
                    // exact="true"
                  >
                    POST A REVIEW {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button2>
                </ReviewsBtnWrapper>
              </TextWrapper>
              <PostModal showModal={showModal} setShowModal={setShowModal} />
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
