import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session.js'
import * as modalActions from '../../../store/modals.js'
import './EditNameModalStyles.css'


function EditNameModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [fname, setFname] = useState(sessionUser.fname);
    const [lname, setLname] = useState(sessionUser.lname);
    const [username, setUsername] = useState(sessionUser.username)
    const [email, setEmail] = useState(sessionUser.email)

    function handleFnameChange(e) {
        setFname(e.target.value)
    }

    function handleLnameChange(e) {
        setLname(e.target.value)
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handleSave() {
        dispatch(sessionActions.updateUser(sessionUser.id, {
            fname: fname,
            lname: lname,
            username: username,
            email: email,
        }));
        dispatch(modalActions.hideEditModal());
    }

    function overlayClick() {
        dispatch(modalActions.hideEditModal())
    }

    return (
        <>
            <div className="modal-overlay" onClick={overlayClick}></div>
            <div className="useredit-modal-container">

                <h1 className="modal-header">update your user info</h1>
                <p className="userinfo-p">first name</p>
                <input
                    className='modal-input'
                    type='text'
                    name='fname'
                    value={fname}
                    placeholder={fname}
                    onChange={handleFnameChange}
                />
                <p className="userinfo-p">last name</p>
                <input
                    type='text'
                    className='modal-input'
                    name='lname'
                    value={lname}
                    placeholder={lname}
                    onChange={handleLnameChange}
                />
                <p className="userinfo-p">username</p>
                <input
                    type='text'
                    className='modal-input'
                    name='username'
                    value={username}
                    placeholder={username}
                    onChange={handleUsernameChange}
                />
                <p className="userinfo-p">email</p>
                <input
                    type='text'
                    className='modal-input'
                    name='email'
                    value={email}
                    placeholder={email}
                    onChange={handleEmailChange}
                />
                <button className='modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default EditNameModal;