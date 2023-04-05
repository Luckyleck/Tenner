import React from 'react';
import './JoinModal.css'; // import CSS file for styling

function JoinModal({ ModalToggle }) {
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
        <button className="modal-button">Continue</button>
        <p className="modal-paragraph">
          By joining I agree to receive emails from Fiverr.
        </p>
        <hr className="modal-hr" />
        <p className="modal-signin">
          Already a member? <a href="/signin">Sign In</a>
        </p>
      </div>
    </>
  );
}

export default JoinModal;