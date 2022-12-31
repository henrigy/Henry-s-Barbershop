import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button3 } from '../../ButtonElement';
import { BsFillStarFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../actions/posts';

import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  Title,
  NameContainer,
  RatingContainer,
  CommentContainer,
  ButtonWrap,
  StarsRow,
} from './FormElements';

const Form = ({ showModal, setShowModal }) => {
  const [postData, setPostData] = useState({
    creator: '',
    rating: 0,
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      handleClear();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        handleClear();
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const handleClear = () => {
    setPostData({
      creator: '',
      rating: 0,
      comment: '',
    });
    setSubmitted(false); // Set submitted back to false
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true
    if (
      postData.creator.trim() === '' ||
      postData.rating === 0 ||
      postData.comment.trim() === ''
    ) {
      // display an error message or alert to indicate that all fields are required
      return;
    }
    // submit the form and close the modal
    console.log(postData.creator, postData.rating, postData.comment);
    dispatch(createPost(postData));
    setShowModal(false);
    handleClear();
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Title>My Review</Title>
                <NameContainer>
                  <label htmlFor="name">Name:</label>
                  <textarea
                    style={{
                      border:
                        submitted && postData.creator.trim() === ''
                          ? '2px solid red'
                          : 'none',

                      resize: 'none',
                    }}
                    id="name"
                    value={postData.creator}
                    onChange={(event) =>
                      setPostData({ ...postData, creator: event.target.value })
                    }
                    maxLength="50"
                  />
                  <p
                    style={{
                      color: postData.creator.length === 50 ? 'red' : 'inherit',
                    }}
                  >
                    {postData.creator.length}/50
                  </p>
                </NameContainer>

                <RatingContainer>
                  <label htmlFor="rating">Rating:</label>
                  <StarsRow
                    style={{
                      border:
                        submitted && postData.rating === 0
                          ? '2px solid red'
                          : 'none',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <span
                        key={ratingValue}
                        role="button"
                        aria-label={`${ratingValue} out of 5 stars`}
                        onClick={() =>
                          setPostData({ ...postData, rating: ratingValue })
                        }
                        onKeyPress={() =>
                          setPostData({ ...postData, rating: ratingValue })
                        }
                        tabIndex={0}
                        style={{
                          color:
                            ratingValue <= postData.rating
                              ? '#0437f2'
                              : '#CCCCCC',
                          cursor: 'pointer',
                        }}
                      >
                        <BsFillStarFill />
                      </span>
                    ))}
                  </StarsRow>
                </RatingContainer>

                <CommentContainer>
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    style={{
                      border:
                        submitted && postData.comment.trim() === ''
                          ? '2px solid red'
                          : 'none',
                      overflowY: 'scroll',
                      resize: 'none',
                    }}
                    id="comment"
                    value={postData.comment}
                    onChange={(event) =>
                      setPostData({ ...postData, comment: event.target.value })
                    }
                    maxLength="500"
                  />
                  <p
                    style={{
                      color:
                        postData.comment.length === 500 ? 'red' : 'inherit',
                    }}
                  >
                    {postData.comment.length}/500
                  </p>
                </CommentContainer>

                <ButtonWrap>
                  <Button3
                    primary="true"
                    // dark="true"
                    smooth={true}
                    duration={500}
                    // type="button"
                    onClick={handleClear}
                  >
                    CLEAR
                  </Button3>
                  <Button3 smooth={true} duration={500} onClick={handleSubmit}>
                    POST
                  </Button3>
                </ButtonWrap>
              </ModalContent>
              {/* this is the x icon on the top right of the modal */}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => {
                  setShowModal((prev) => !prev);
                  handleClear();
                }}
                smooth={true}
                duration={500}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Form;
