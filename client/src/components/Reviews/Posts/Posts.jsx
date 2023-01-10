import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Post from './Post/Post';
import { PostsContainer, ProgressWrapper, PostsWrapper } from './PostsElements';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts);

  return (
    <PostsContainer>
      {!posts.length ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <PostsWrapper>
          {posts.map((post) => (
            <Post key={post.createdAt} post={post} />
          ))}
        </PostsWrapper>
      )}
    </PostsContainer>
  );
};

export default Posts;
