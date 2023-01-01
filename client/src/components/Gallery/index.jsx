import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  GalleryColumn1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  RightWrap,
} from './GalleryElements';

const Gallery = () => {
  const [column1Visible, setColumn1Visible] = useState(false);

  const handleScroll = () => {
    const column1Element = document.querySelector('#galleryColumn1');
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
      <InfoContainer id={'gallery'}>
        <InfoWrapper>
          <InfoRow>
            <GalleryColumn1
              id={'galleryColumn1'}
              className={column1Visible ? 'visible' : ''}
            >
              <TextWrapper>
                <TopLine>Gallery</TopLine>
                <Heading>Check out some of my work!</Heading>
                <Subtitle>
                  For more content and information, checkout &nbsp;
                  <a
                    href="https://www.instagram.com/henrysbarbershop/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#010606' }}
                    onMouseOver={({ target }) => {
                      target.style.color = '#0437f2';
                    }}
                    onMouseOut={({ target }) => {
                      target.style.color = '#010606';
                    }}
                  >
                    @Henrysbarbershop
                  </a>
                  &nbsp;on Instagram!
                </Subtitle>
              </TextWrapper>
            </GalleryColumn1>
            <Column2>
              <RightWrap>
                <Carousel />
              </RightWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Gallery;
