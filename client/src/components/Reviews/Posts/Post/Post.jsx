import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { BsFillStarFill } from 'react-icons/bs';
import {
  PostContainer,
  TopRow,
  BottomHalf,
  Comment,
  Creator,
  Rating,
  Time,
} from './PostElements';

const Post = ({ post }) => {
  const isoTime = post.createdAt;
  const pacificTime = moment.tz(isoTime, 'America/Los_Angeles');
  const pacificTimeFormatted = pacificTime.format('YYYY-MM-DD hh:mm:ss A');
  const pacificTimeMoment = moment(
    pacificTimeFormatted,
    'YYYY-MM-DD hh:mm:ss A'
  );
  const relativeTime = pacificTimeMoment.fromNow();

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
        <Rating>{getStars(post.rating, 5)}</Rating>
        <Time>{relativeTime}</Time>
      </TopRow>
      <BottomHalf>
        <Comment>"{post.comment}"</Comment>
        <Creator> -{post.creator}</Creator>
      </BottomHalf>
    </PostContainer>
  );
};

export default Post;
