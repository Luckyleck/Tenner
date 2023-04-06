import React, { useState } from 'react';
import './SecondModal.css'
import { useDispatch } from 'react-redux';
import * as modalActions from '../../../../store/modals'
import * as sessionActions from '../../../../store/session'

function SecondModal({ formData, setFormData }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([])
    const { email, username, password } = formData

    function overlayClick() {
        dispatch(modalActions.hideJoinTwo())
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleJoin() {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, username, password }))
            .then(() => {
                dispatch(modalActions.hideJoinTwo());
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
                    setFormData({ ...formData, password: '' })
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
                <h2 className="modal-header">Join Tenner</h2>
                <input
                    type="text"
                    className="modal-input"
                    name="username"
                    value={formData.username}
                    placeholder="Choose a username"
                    onChange={handleChange}
                />
                {errors.map((error, index) => {
                    if (error.includes('Username')) {
                        return (
                            <p className="errors" key={index}>
                                {error}
                            </p>
                        )
                    }
                    return null;
                })}
                <input
                    type="password"
                    className="modal-input"
                    name="password"
                    value={formData.password}
                    placeholder="Choose a password"
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
                <button className="modal-button" onClick={handleJoin}>
                    Join
                </button>
                <p className="modal-signin">
                    Not a member yet? <a href="/login">Join now</a>
                </p>
            </div>
        </>
    );
}

export default SecondModal;