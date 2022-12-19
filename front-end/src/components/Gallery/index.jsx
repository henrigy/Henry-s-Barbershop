import React from "react";
import Carousel from "./Carousel";

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
} from "./GalleryElements";

const Gallery = () => {
  return (
    <>
      <InfoContainer id={"gallery"}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Gallery</TopLine>
                <Heading>Check out some of my work!</Heading>
                <Subtitle>
                  For more content and information, checkout &nbsp;
                  <a
                    href="https://www.instagram.com/henrysbarbershop/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#010606" }}
                    onMouseOver={({ target }) => {
                      target.style.color = "#0437f2";
                    }}
                    onMouseOut={({ target }) => {
                      target.style.color = "#010606";
                    }}
                  >
                    @Henrysbarbershop
                  </a>
                  &nbsp;on Instagram!
                </Subtitle>
              </TextWrapper>
            </Column1>
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
