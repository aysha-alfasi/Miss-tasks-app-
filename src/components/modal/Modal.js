import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Button } from "react-bootstrap";

const Modal = ({ onClose, src, response }) => {
  const handleClose = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-header-content">
          <div className="mis-tasks-avatar">
            <img src={src} alt="miss-tasks-avatar"></img>
          </div>
          <div className="modal-title">
            <h4>Miss Tasks</h4>
          </div>
        </div>
        <div className="content-box">
          {response}
        </div>
        <Container className="text-center">
           <Button
              className="modal-btn"
              type="submit"
              onClick={handleClose}
            >
              Ok
            </Button>
        </Container>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
