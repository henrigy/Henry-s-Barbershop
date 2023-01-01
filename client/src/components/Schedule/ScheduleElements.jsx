import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: #111;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 92vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`;

export const ScheduleColumn1 = styled.div`
  transition: all 0.4s ease-in-out;
  transform: translateX(-100%);
  opacity: 0;

  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
    height: 32vh;
  }

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  height: 75vh;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
    height: 60vh;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ff5f1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #eee;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }

  @media screen and (max-height: 768px) and (max-width: 480px) {
    font-size: 28px;
  }

  @media screen and (max-height: 480px) {
    font-size: 28px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    margin-bottom: 5px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #eee;

  @media screen and (max-height: 768px) and (max-width: 480px) {
    font-size: 14px;
  }

  @media screen and (max-height: 480px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const RightWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 480px) and (max-width: 768px) {
    margin-top: 13%;
  }
`;
