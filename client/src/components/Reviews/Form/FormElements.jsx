import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Background = styled.div`
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 70vw;
  height: 60vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #f9f9f9;
  color: #111;
  display: grid;
  position: relative;
  z-index: 1001;
  border-radius: 15px;
  padding: 45px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #111;
  padding: 10px 60px;
  min-width: 90%;
`;

export const CloseModalButton = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 1001;

  &:hover {
    color: #ff5f1f;
    transition: 0.2s ease-in-out;
  }
`;

export const Title = styled.h2`
  width: 100%;
  align-items: center;
  text-align: center;
  font-size: 36px;
  text-align: center;
  color: #111;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  padding: 5px;

  label {
    font-size: 20px;
    margin-right: 55px;
  }

  textarea {
    background: #dddddd;
    width: 530px;
    height: 40px;
    border: 2px solid #333333;
    border-radius: 10px;
    font-size: 16px;
    padding: 5px;
    box-sizing: border-box;
    &:hover {
      border: 3px solid #0437f2;
    }
  }

  p {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    label {
      order: -1;
    }
    textarea {
      width: 100%;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 5px 0;
  padding: 5px;
  label {
    font-size: 20px;
    margin-right: 47px;
  }
  span {
    font-size: 24px;
    color: #dddddd;
    cursor: pointer;
    border: 2px solid transparent;
  }

  span:hover {
    border-color: blue;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    label {
      order: -1;
    }
    span {
      margin: -1px;
    }
  }
`;

export const StarsRow = styled.div`
  display: flex;
  span {
    display: inline-block;
  }
`;

export const CommentContainer = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  padding: 5px;
  label {
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
    margin-right: 15px;
  }
  textarea {
    background: #dddddd;
    width: 530px;
    height: 100px;
    border: 2px solid #333333;
    // border: 2px solid #ff0000;
    border-radius: 10px;
    font-size: 16px;
    padding: 5px;
    box-sizing: border-box;
    overflow-y: scroll;

    &:hover {
      border: 3px solid #0437f2;
    }
  }

  p {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    label {
      order: -1;
    }
    textarea {
      width: 100%;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin: 10px;
`;
