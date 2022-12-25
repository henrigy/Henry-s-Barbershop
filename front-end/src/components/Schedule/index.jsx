import React from "react";
import Calendly from "../Calendly";
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
} from "./ScheduleElements";

const Schedule = () => {
  return (
    <>
      <InfoContainer id={"schedule"}>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>Schedule</TopLine>
                <Heading>Lock-in your next appointment</Heading>
                <Subtitle>
                  Can't find a time that works? Direct message &nbsp;
                  <a
                    href="https://www.instagram.com/henrysbarbershop/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#f7f8fa" }}
                    onMouseOver={({ target }) =>
                      (target.style.color = "#ff5f1f")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#f7f8fa")
                    }
                  >
                    @Henrysbarbershop
                  </a>
                  &nbsp;on Instagram.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <RightWrap>
                <Calendly />
              </RightWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Schedule;
