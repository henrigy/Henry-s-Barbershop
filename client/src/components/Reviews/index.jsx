import React, { useState, useEffect } from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ReviewsColumn1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  RightWrap,
  ReviewsBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './ReviewsElements';
import { Button2 } from '../ButtonElement';
import Form from './Form/Form';
import Posts from './Posts/Posts';

const Reviews = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [column1Visible, setColumn1Visible] = useState(false);

  const handleScroll = () => {
    const column1Element = document.querySelector('#reviewsColumn1');
    const column1Rect = column1Element.getBoundingClientRect();
    const column1InViewport =
      column1Rect.top >= 0 && column1Rect.bottom <= window.innerHeight;

    if (column1InViewport) {
      setColumn1Visible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <InfoContainer id={'reviews'}>
        <InfoWrapper>
          <InfoRow>
            <ReviewsColumn1
              id={'reviewsColumn1'}
              className={column1Visible ? 'visible' : ''}
            >
              <TextWrapper>
                <TopLine>Reviews</TopLine>
                <Heading>How was your experience?</Heading>
                <Subtitle>
                  Please give us a rating, upload a picture, and leave us your
                  thoughts!
                </Subtitle>
                <ReviewsBtnWrapper>
                  <Button2
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    duration={500}
                    onClick={openModal}
                  >
                    POST A REVIEW {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button2>
                </ReviewsBtnWrapper>
              </TextWrapper>
            </ReviewsColumn1>
            <Form showModal={showModal} setShowModal={setShowModal} />
            <Column2>
              <RightWrap>
                <Posts />
              </RightWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Reviews;
