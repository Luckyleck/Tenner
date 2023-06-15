import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session.js'
import * as modalActions from '../../../store/modals.js'
import './EditNameModalStyles.css'


function EditNameModal({ user }) {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        fname: user.fname,
        lname: user.lname,
        username: user.username,
        email: user.email,
        profileUrl: user.profileUrl
    });

    function handleChange(e) {
        console.log(e)
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    function handleFileChange(e) {
        const photoFile = e.target.files[0];
        setFormData(prevFormData => ({
            ...prevFormData,
            profileUrl: photoFile
        }));
    }

    function handleSave() {
        dispatch(sessionActions.updateUser(user.id, formData));
        dispatch(modalActions.hideEditModal());
    };

    // function handleSave() {
    //     const updatedFormData = new FormData();
    //     updatedFormData.append('user[fname]', formData.fname);
    //     updatedFormData.append('user[lname]', formData.lname);
    //     updatedFormData.append('user[username]', formData.username);
    //     updatedFormData.append('user[email]', formData.email);
    //     if (formData.profileUrl) {
    //         updatedFormData.append('user[photo]', formData.profileUrl);
    //     }

    //     dispatch(sessionActions.updateUser(user.id, updatedFormData));
    //     dispatch(modalActions.hideEditModal());
    // }

    function overlayClick() {
        dispatch(modalActions.hideEditModal());
    };

    return (
        <>
            <div className="modal-overlay" onClick={overlayClick}></div>
            <div className="useredit-modal-container">
                <h1 className="modal-header">update your user info</h1>
                <label className="userinfo-p">first name</label>
                <input
                    className='modal-input'
                    type='text'
                    name='fname'
                    value={formData.fname}
                    placeholder={formData.fname}
                    onChange={handleChange}
                />
                <label className="userinfo-p">last name</label>
                <input
                    type='text'
                    className='modal-input'
                    name='lname'
                    value={formData.lname}
                    placeholder={formData.lname}
                    onChange={handleChange}
                />
                <label className="userinfo-p">username</label>
                <input
                    type='text'
                    className='modal-input'
                    name='username'
                    value={formData.username}
                    placeholder={formData.username}
                    onChange={handleChange}
                />
                <label className="userinfo-p">email</label>
                <input
                    type='text'
                    className='modal-input'
                    name='email'
                    value={formData.email}
                    placeholder={formData.email}
                    onChange={handleChange}
                />
                <label className="userinfo-p">Upload a profile image</label>
                <input type="file" onChange={handleFileChange} />
                <button className='modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    );
}

export default EditNameModal;