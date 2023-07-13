import React, { useEffect, useState } from "react";
import './ProfileCardStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../store/modals.js'
import EditNameModal from "./EditNameModal";
import { ipStackKey } from "../../assets/apiKey";
import pencilIcon from '../../assets/pencil-bw-removebg-preview.png'

function ProfileCard({ user }) {
    const dispatch = useDispatch();
    const editNameModal = useSelector(state => state.modal.editModal)
    const [country, setCountry] = useState(null);
    const hasPhoto = user.photoUrl

    function profilePic(hasPhoto) {
        if (hasPhoto) {
            return (
                <img src={user.photoUrl} alt="profilepicture" />
            )
        } else {
            return (
                <h1>{user.username[0]}</h1>
            )
        }
    }

    function handleEdit() {
        dispatch(modalActions.showEditModal())
    }

    function fetchCountry(setCountry) {
        fetch(`http://api.ipstack.com/check?access_key=${ipStackKey}`)
            .then(response => response.json())
            .then(data => {
                const { country_name } = data;
                setCountry(country_name);
            })
            .catch(error => console.log(error));
    };

    function memberSince(created_at) {
        return new Date(created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' });
    }

    useEffect(() => {
        fetchCountry(setCountry);
    }, []);

    const isProfilePage = window.location.pathname === '/profile';

    return (
        <>
            <div className="profile-info-container">
                <div className="profile-img">
                    {hasPhoto ? (
                        <img src={user.photoUrl} alt="profilepicture" />
                    ) : (
                        <h1>{user.username[0]}</h1>
                    )}
                </div>

                <div className="profile-info-text">
                    <div className="top-row">
                        <h1>{user.fname} {user.lname}</h1>
                        {isProfilePage && <img id="edit-icon" onClick={handleEdit} src={pencilIcon} alt="edit" />}
                    </div>
                    <h2>@{user.username}</h2>
                    <h2 style={{ paddingBottom: '10%' }}>{user.email}</h2>
                    <hr id="user-card-hr" />
                    <div className="place-member-since">
                        <div className="place">
                            <p>Member since</p>
                            <p>{memberSince(isProfilePage ? user.createdAt : user.created_at)}</p>
                        </div>
                        <h3> </h3>
                    </div>
                </div>
            </div>
            {editNameModal && <EditNameModal user={user} />}
        </>
    )
}

export default ProfileCard;