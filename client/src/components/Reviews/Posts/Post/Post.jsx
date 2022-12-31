import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import {
  PostContainer,
  TopRow,
  BottomHalf,
  Comment,
  Creator,
  Rating,
  Time,
} from './PostElements';
import { BsFillStarFill } from 'react-icons/bs';

const Post = ({ post }) => {
  const createdAtPst = moment(post.createdAt)
    .tz('America/Los_Angeles')
    .format('YYYY-MM-DD hh:mm:ss A');

  const getStars = (rating, maxStars) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<BsFillStarFill style={{ color: '#0437f2' }} key={i} />);
    }
    for (let i = rating; i < maxStars; i++) {
      stars.push(<BsFillStarFill style={{ color: '#999' }} key={i} />);
    }
    return stars;
  };

  return (
    <PostContainer>
      <TopRow>
        {/* <StarRow> */}
        <Rating>{getStars(post.rating, 5)}</Rating>
        {/* </StarRow> */}
        <Time>{moment(createdAtPst).fromNow()}</Time>
      </TopRow>
      <BottomHalf>
        <Comment>"{post.comment}"</Comment>
        <Creator> - {post.creator}</Creator>
      </BottomHalf>
    </PostContainer>
  );
};

export default Post;
