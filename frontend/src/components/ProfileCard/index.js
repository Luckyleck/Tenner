import React, { useEffect } from "react";
import './ProfileCardStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../store/modals.js'
import EditNameModal from "./EditNameModal";



function ProfileCard({ user }) {
    const dispatch = useDispatch();
    const editNameModal = useSelector(state => state.modal.editModal)

    function handleEdit() {
        dispatch(modalActions.showEditModal())
    }

    return (
        <>
            <div className="profile-info-container">
                <div className="profile-img">
                    <h1>{user.username[0]}</h1>
                </div>
                <img>{user.photoUrl}</img>
                <div className="profile-info-text">
                    <div className="top-row">
                        <h1>{user.fname} {user.lname}</h1>
                        <img id="edit-icon" onClick={handleEdit} src='https://gcdnb.pbrd.co/images/OJG00LyY6Eev.png?o=1' alt="edit" />
                    </div>
                    <h2>@{user.username}</h2>
                    <h2 style={{ paddingBottom: '10%' }}>{user.email}</h2>
                </div>
            </div>
            {editNameModal && <EditNameModal user={user} />}
        </>
    )
}

export default ProfileCard;