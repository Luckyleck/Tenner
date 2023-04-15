import React from "react";
import './ProfileCardStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../store/modals.js'
import EditNameModal from "./EditNameModal";



function ProfileCard() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const editNameModal = useSelector(state => state.modal.editModal)

    function handleEdit() {
        dispatch(modalActions.showEditModal())
    }

    return (
        <>
            <div className="profile-info-container">
                <div className="profile-img">
                    <h1>{sessionUser.username[0]}</h1>
                </div>
                <div className="profile-info-text">
                    <div className="top-row">
                        <h1>{sessionUser.fname} {sessionUser.lname}</h1>
                        <img id="edit-icon" onClick={handleEdit} src='https://gcdnb.pbrd.co/images/OJG00LyY6Eev.png?o=1' />
                    </div>
                    <h2>@{sessionUser.username}</h2>
                    <h2 style={{ paddingBottom: '10%' }}>{sessionUser.email}</h2>
                </div>
            </div>
            {editNameModal && <EditNameModal />}
        </>

    )
}

export default ProfileCard;