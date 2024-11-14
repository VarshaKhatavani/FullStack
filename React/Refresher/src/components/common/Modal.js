import React from "react";
import "../../style/Modal.css"; // CSS for styling

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null; // If modal is not open, return null

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Items already in cart</h2>
        <p>
          Your cart contains items from another restaurant. Would you like to
          reset your cart for adding items from this restaurant?
        </p>
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button no-button">
            NO
          </button>
          <button onClick={onConfirm} className="modal-button yes-button">
            YES, START AFRESH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
