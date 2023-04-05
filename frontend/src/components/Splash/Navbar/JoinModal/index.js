import React, { useState }from 'react';
import './JoinModal.css'; // import CSS file for styling

function JoinModal({ ModalToggle, toggleSecondModal }) {

  const handleContinue = () => {
    ModalToggle();
    toggleSecondModal();
  }

  return (
    <>
      <div className='modal-overlay' onClick={ModalToggle}/>
      <div className="modal-container">
        <h2 className="modal-header">Join Tenner</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Enter your email"
        />
        <button className="modal-button" onClick={handleContinue}>Continue</button>
        <p className="modal-paragraph">
          By joining I agree to receive emails from Tenner.
        </p>
        <hr className="modal-hr" />
        <p className="modal-signin">
          Already a member? <a href="/login">Sign In</a>
        </p>
      </div>
    </>
  );
}

export default JoinModal;