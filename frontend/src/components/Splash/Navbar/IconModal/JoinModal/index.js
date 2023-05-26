import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import * as modalActions from '../../../../store/modals'
import './JoinModal.css'; // import CSS file for styling


function JoinModal({ formData, setFormData }) {

  // to.do Handle email taken error

  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])

  function overlayClick() {
    dispatch(modalActions.hideJoinOne())
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSignIn () {
    dispatch(modalActions.hideJoinOne())
    dispatch(modalActions.showSignin()) 
  }

  function handleContinue () {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setErrors(['email']);
      return;
    }

    dispatch(modalActions.hideJoinOne())
    dispatch(modalActions.showJoinTwo())
    // console.log(formData.email) 
  }

  return (
    <>
      <div className='modal-overlay' onClick={overlayClick} />
      <div className="modal-container">
        <h2 className="modal-header">Join Tenner</h2>
        <input
          type="text"
          className="modal-input"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.length > 0 && <div className='errors'>Looks like this email is incomplete.</div>}
        <button className="modal-button" onClick={handleContinue}>Continue</button>
        <p className="modal-paragraph">
          By joining I agree to receive emails from Tenner.
        </p>
        <hr className="modal-hr" />
        <p className="modal-signin">
          Already a member? <span onClick={handleSignIn} className="modal-link">Sign In</span>
        </p>
      </div>
    </>
  );
}

export default JoinModal;