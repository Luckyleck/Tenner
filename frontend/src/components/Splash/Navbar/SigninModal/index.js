import React, { useState } from 'react';
import './SigninModal.css';
import { useDispatch } from 'react-redux';
import * as modalActions from '../../../../store/modals'
import * as sessionActions from '../../../../store/session'
import { Redirect } from 'react-router-dom';

function SigninModal ({formData, setFormData}) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    // const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const { text, password } = formData

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function overlayClick() {
        dispatch(modalActions.hideSignin())
    }

    function handleContinue() {
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
                    value={formData.text}
                    placeholder="Email / Username"
                    onChange={handleChange}
                />
                {errors.map((error, index) => {
                    if (error.includes('Username') || error.includes('Email')) {
                        return (
                            <p className="errors" key={index}>
                                {error}
                            </p>
                        )
                    }
                    return null;
                })}
                {/* render respective errors here*/}
                <input
                    type="text"
                    className="modal-input"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                {errors.map((error, index) => {
                    if (error.includes('Password')) {
                        return (
                            <p className="errors" key={index}>
                                {error}
                            </p>
                        )
                    }
                    return null;
                })}
                <button className="modal-button" onClick={handleContinue}>
                    Continue
                </button>
                <hr className="modal-hr" />
                <p className="modal-signin">
                    Not a member yet? <a href="/singup">Join Now</a>
                </p>
            </div>
        </>
    );
}

export default SigninModal

