import styled from 'styled-components';

export const PostsContainer = styled.div`
  height: 100%;
  width: 45vw;
  background: #eee;
  border-radius: 15px;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ProgressWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;
