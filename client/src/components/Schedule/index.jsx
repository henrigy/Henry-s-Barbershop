import React, { useState, useEffect } from 'react';
import Calendly from './Calendly';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ScheduleColumn1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  RightWrap,
} from './ScheduleElements';

const Schedule = () => {
  const [column1Visible, setColumn1Visible] = useState(false);

  const handleScroll = () => {
    const column1Element = document.querySelector('#scheduleColumn1');
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
      <InfoContainer id={'schedule'}>
        <InfoWrapper>
          <InfoRow>
            <ScheduleColumn1
              id={'scheduleColumn1'}
              className={column1Visible ? 'visible' : ''}
            >
              <TextWrapper>
                <TopLine>Schedule</TopLine>
                <Heading>Lock-in your next appointment</Heading>
                <Subtitle>
                  Can't find a time that works? Direct message &nbsp;
                  <a
                    href="https://www.instagram.com/henrysbarbershop/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: '#f7f8fa' }}
                    onMouseOver={({ target }) =>
                      (target.style.color = '#ff5f1f')
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = '#f7f8fa')
                    }
                  >
                    @Henrysbarbershop
                  </a>
                  &nbsp;on Instagram.
                </Subtitle>
              </TextWrapper>
            </ScheduleColumn1>
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
