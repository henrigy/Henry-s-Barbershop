import styled from 'styled-components';

export const PostsContainer = styled.div`
  height: 100%;
  width: 45vw;
  background: #eee;
  padding: 15px;
  border-radius: 15px;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
