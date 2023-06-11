import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session.js'
import * as modalActions from '../../../store/modals.js'
import './EditNameModalStyles.css'


function EditNameModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [formData, setFormData] = useState({
        fname: sessionUser.fname,
        lname: sessionUser.lname,
        username: sessionUser.username,
        email: sessionUser.email
    });

    function handleChange(e) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    function handleSave() {
        dispatch(sessionActions.updateUser(sessionUser.id, formData));
        dispatch(modalActions.hideEditModal());
    };

    function overlayClick() {
        dispatch(modalActions.hideEditModal());
    };

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
                    value={formData.fname}
                    placeholder={formData.fname}
                    onChange={handleChange}
                />
                <p className="userinfo-p">last name</p>
                <input
                    type='text'
                    className='modal-input'
                    name='lname'
                    value={formData.lname}
                    placeholder={formData.lname}
                    onChange={handleChange}
                />
                <p className="userinfo-p">username</p>
                <input
                    type='text'
                    className='modal-input'
                    name='username'
                    value={formData.username}
                    placeholder={formData.username}
                    onChange={handleChange}
                />
                <p className="userinfo-p">email</p>
                <input
                    type='text'
                    className='modal-input'
                    name='email'
                    value={formData.email}
                    placeholder={formData.email}
                    onChange={handleChange}
                />
                <button className='modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    );
}

export default EditNameModal;