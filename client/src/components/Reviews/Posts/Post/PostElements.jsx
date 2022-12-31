import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  background: #dedede;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Rating = styled.h4`
  font-weight: normal;
`;

export const Time = styled.h5`
  font-weight: normal;
`;

export const BottomHalf = styled.div`
  background: #ccd;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Comment = styled.h4`
  font-weight: normal;
  overflow: hidden;
  word-wrap: break-word;
`;

export const Creator = styled.h5`
  padding: 0 20px;
  margin-left: auto;
  font-weight: 600;
`;
