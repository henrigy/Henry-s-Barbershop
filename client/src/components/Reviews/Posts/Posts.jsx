import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { PostsContainer } from './PostsElements';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.createdAt} post={post} />
      ))}
    </PostsContainer>
  );
};

export default Posts;
