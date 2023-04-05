import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../../../store/modals'
import './JoinModal.css'; // import CSS file for styling


function JoinModal() {

  const dispatch = useDispatch();

  function overlayClick() {
    dispatch(modalActions.hideJoinOne())
  }

  const handleContinue = () => {
    dispatch(modalActions.hideJoinOne())
    dispatch(modalActions.showJoinTwo())
  }

  return (
    <>
      <div className='modal-overlay' onClick={overlayClick}/>
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