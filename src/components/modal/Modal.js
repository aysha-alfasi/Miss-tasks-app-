import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "react-bootstrap";
import missTasksImg from "../../imgs/g4.png";
import { motion } from "framer-motion";
import "animate.css";
import "./Modal.css";

const Modal = ({ onClose, isOpen, response }) => {
  const [isBouncing, setIsBouncing] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClose = () => {
    setIsBouncing(true); // <♡ Start the bounce animation
    setButtonClicked(true);

    // <♡ After bounce animation, close the modal after a short delay />
    setTimeout(() => {
      setIsBouncing(false);
    }, 2000);

    setTimeout(() => {
      onClose(); // <♡ Make the box disappear
    }, 4000);
  };

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay"
    >
      <motion.div
        className={`modal-content ${
          isBouncing ? "animate__animated animate__bounce" : ""
        }`}
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        exit={{
          opacity: 0,
          scale: 0.9,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-header-content">
          <div className="miss-tasks-avatar">
            <img src={missTasksImg} alt="miss-tasks-avatar"></img>
          </div>
          <div className="modal-title">
            <h4>Miss Tasks</h4>
          </div>
        </div>
        <div className="content-box">
          <p>
            {buttonClicked
              ? "Hey! Don’t forget to send me again about your progress!"
              : response}
          </p>
        </div>
        <Container className="text-center">
          <Button className="modal-btn" type="submit" onClick={handleClose}>
            Ok
          </Button>
        </Container>
      </motion.div>
    </motion.div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
