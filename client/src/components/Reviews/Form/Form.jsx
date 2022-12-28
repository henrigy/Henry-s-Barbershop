import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Button3 } from '../../ButtonElement';
import { BsFillStarFill } from 'react-icons/bs';

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
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    setName('');
    setRating(0);
    setComment('');
    setSubmitted(false); // Set submitted back to false
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true
    if (name.trim() === '' || rating === 0 || comment.trim() === '') {
      // display an error message or alert to indicate that all fields are required
      return;
    }
    // submit the form and close the modal
    setShowModal(false);
    handleClear();
  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
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
                        submitted && name.trim() === ''
                          ? '2px solid red'
                          : 'none',

                      resize: 'none',
                    }}
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    maxLength="50"
                  />
                  <p style={{ color: name.length === 50 ? 'red' : 'inherit' }}>
                    {name.length}/50
                  </p>
                </NameContainer>

                <RatingContainer>
                  <label htmlFor="rating">Rating:</label>
                  <StarsRow
                    style={{
                      border:
                        submitted && rating === 0 ? '2px solid red' : 'none',
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                      <span
                        key={ratingValue}
                        role="button"
                        aria-label={`${ratingValue} out of 5 stars`}
                        onClick={() => setRating(ratingValue)}
                        onKeyPress={() => setRating(ratingValue)}
                        tabIndex={0}
                        style={{
                          color: ratingValue <= rating ? '#FFD700' : '#CCCCCC',
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
                        submitted && comment.trim() === ''
                          ? '2px solid red'
                          : 'none',
                      overflowY: 'scroll',
                      resize: 'none',
                    }}
                    id="comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    maxLength="500"
                  />
                  <p
                    style={{
                      color: comment.length === 500 ? 'red' : 'inherit',
                    }}
                  >
                    {comment.length}/500
                  </p>
                </CommentContainer>

                <ButtonWrap>
                  <Button3
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    type="button"
                    onClick={handleClear}
                  >
                    CLEAR
                  </Button3>
                  <Button3 onClick={handleSubmit}> POST</Button3>
                </ButtonWrap>
              </ModalContent>
              {/* this is the x icon on the top right of the modal */}
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => {
                  setShowModal((prev) => !prev);
                  handleClear();
                }}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Form;
