import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Post from './Post/Post';
import { PostsContainer, ProgressWrapper } from './PostsElements';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <PostsContainer>
      {!posts.length ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        posts.map((post) => <Post key={post.createdAt} post={post} />)
      )}
    </PostsContainer>
  );
};

export default Posts;
