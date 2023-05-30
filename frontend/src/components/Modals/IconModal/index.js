import React from 'react'
import * as modalActions from '../../../../store/modals'
import * as sessionActions from '../../../../store/session'
import './IconModalStyles.css'
import { useDispatch } from 'react-redux'


function IconModal () {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(modalActions.hideIconModal())
        dispatch(sessionActions.logout())
    }

    return (
        <div className='icon-container'>
            <h2 id="profile">Profile</h2>
            <hr className="profile-hr"/>
            <h2 id="logout" onClick={handleLogout}>Logout</h2>
        </div>
    )
}

export default IconModal