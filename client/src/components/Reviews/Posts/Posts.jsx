import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { PostsContainer } from './PostsElements';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
