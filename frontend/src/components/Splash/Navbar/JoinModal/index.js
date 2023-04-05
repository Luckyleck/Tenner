import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../../../store/modals'
import './JoinModal.css'; // import CSS file for styling


function JoinModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([])

  function overlayClick() {
    dispatch(modalActions.hideJoinOne())
  }

  const handleContinue = () => {

    dispatch(modalActions.hideJoinOne())
    dispatch(modalActions.showJoinTwo())
  }

  // const errorsMap = () => {
  //   debugger
  //   return errors.map((error) => <li>{error}</li>)
  // }

  return (
    <>
      <div className='modal-overlay' onClick={overlayClick} />
      <div className="modal-container">
        <h2 className="modal-header">Join Tenner</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <ul>
          {errorsMap()}
        </ul> */}
        {/* {true && <div className='errors'>Looks like this email is incomplete</div>} */}
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