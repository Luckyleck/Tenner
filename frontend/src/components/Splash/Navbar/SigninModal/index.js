import React, { useState } from 'react';
import './SigninModal.css';
import { useDispatch } from 'react-redux';
import * as modalActions from '../../../../store/modals'
import * as sessionActions from '../../../../store/session'

function SigninModal() {

    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    function overlayClick() {
        dispatch(modalActions.hideSignin())
    }

    function handleJoinNow() { //To switch between modals of signin and join
        dispatch(modalActions.hideSignin())
        dispatch(modalActions.showJoinOne())
    }

    function handleDemo() {
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password'}))
        dispatch(modalActions.hideSignin())
    }

    function handleContinue() {
        setErrors([])
        return dispatch(sessionActions.login({ credential, password }))
            .then(() => {
                dispatch(modalActions.hideSignin());
            })
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) {
                    setErrors(data.errors);
                    setPassword('')
                    // console.log(data.errors);
                } else if (data) {
                    setErrors([data]);
                    console.log(data);
                } else {
                    setErrors([res.statusText]);
                }
            });
    }

    return (
        <>
            <div className='modal-overlay' onClick={overlayClick} />
            <div className="modal-container">
                <h2 className="modal-header">Sign In to Tenner</h2>
                <input
                    type="text"
                    className="modal-input"
                    value={credential}
                    placeholder="Email / Username"
                    onChange={(e) => setCredential(e.target.value)}
                />
                <input
                    type="password"
                    className="modal-input"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.map((error, index) => {
                    if (error.includes('Invalid')) {
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
                <button className="modal-button" onClick={handleDemo}>
                    Demo User
                </button>

                <hr className="modal-hr" />
                <p className="modal-signin">
                    Not a member yet? <span onClick={handleJoinNow} className="modal-link">Join Now</span>
                </p>
            </div>
        </>
    );
}

export default SigninModal

