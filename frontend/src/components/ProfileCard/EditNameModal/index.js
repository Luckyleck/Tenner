import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session.js'
import * as modalActions from '../../../store/modals.js'


function EditNameModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [fname, setFname] = useState(sessionUser.fname);
    const [lname, setLname] = useState(sessionUser.lname);

    function handleFnameChange(e) {
        setFname(e.target.value)
    }

    function handleLnameChange(e) {
        setLname(e.target.value)
    }

    function handleSave() {
        console.log('saved')
        dispatch(sessionActions.setCurrentUser({
            ...sessionUser,
            fname: fname,
            lname: lname
        }))
        dispatch(modalActions.hideEditModal())
    }

    function overlayClick() {
        dispatch(modalActions.hideEditModal())
    }

    return (
        <>
            <div className="modal-overlay" onClick={overlayClick}></div>
            <div className="modal-container">

                <h1 className="modal-header">update your display name</h1>
                <input
                    className='modal-input'
                    type='text'
                    name='fname'
                    value={fname}
                    placeholder={fname}
                    onChange={handleFnameChange}
                />
                <input
                    type='text'
                    className='modal-input'
                    name='lname'
                    value={lname}
                    placeholder={lname}
                    onChange={handleLnameChange}
                />
                <button className='modal-button' onClick={handleSave}>Save</button>
            </div>
        </>
    )
}

export default EditNameModal;