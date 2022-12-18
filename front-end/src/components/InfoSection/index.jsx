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

export default InfoSection;
