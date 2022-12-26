import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
} from "./PostModalElements";

const PostModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>My Review</h1>
                <h2>Fill out name</h2>
                <h2>
                  Rating out of 5 Stars (Have stars that user can hover over)
                </h2>
                <h2>Comment</h2>
                <button> Placeholder for now</button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default PostModal;
