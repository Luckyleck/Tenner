import React, { useState } from 'react';
import './SigninModal.css';
import { useDispatch } from 'react-redux';
import * as modalActions from '../../../../store/modals'
import * as sessionActions from '../../../../store/session'

function SigninModal () {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('')

    function overlayClick() {
        dispatch(modalActions.hideSignin())
    }

    function handleContinue() {

        // if (!credential) {
        //     setEmpty(prevErrors => ({
        //         ...prevErrors,
        //         email: 'error message'
        //     }))
        //     return;
        // }
        return dispatch(sessionActions.login({ credential, password }))
    }

    return (
        <>
            <div className='modal-overlay' onClick={overlayClick} />
            <div className="modal-container">
                <h2 className="modal-header">Sign In to Tenner</h2>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Email / Username"
                    onChange={(e) => setCredential(e.target.value)}
                />
                {/* render respective errors here*/}
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="modal-button" onClick={handleContinue}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default SigninModal

