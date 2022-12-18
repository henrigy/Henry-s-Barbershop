import React from "react";
// import { Button } from '../ButtonElement'
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
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  flip,
  topLine,
  lightText,
  headline,
  darkDescription,
  description,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow flip={flip}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkDescription={darkDescription}>
                  {description}
                </Subtitle>
                {/* <BtnWrap> */}
                {/* <Button to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                  </Button> */}
                {/* </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <RightWrap>{/* <Img src={img} alt={alt}/> */}</RightWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
