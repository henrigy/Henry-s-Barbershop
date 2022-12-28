import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

import { PostsContainer } from './PostsElements';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <PostsContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </PostsContainer>
  );
};

export default Posts;
