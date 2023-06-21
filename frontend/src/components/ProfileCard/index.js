import React, { useEffect, useState } from "react";
import './ProfileCardStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import * as modalActions from '../../store/modals.js'
import EditNameModal from "./EditNameModal";
import { ipStackKey } from "../../assets/apiKey";

const pencilIcon = "https://gcdnb.pbrd.co/images/OJG00LyY6Eev.png?o=1"

function ProfileCard({ user }) {
    const dispatch = useDispatch();
    const editNameModal = useSelector(state => state.modal.editModal)
    const [country, setCountry] = useState(null);

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

    useEffect(() => {
        fetchCountry(setCountry);
    }, []);

    console.log(country)

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
                        <img id="edit-icon" onClick={handleEdit} src={pencilIcon} alt="edit" />
                    </div>
                    <h2>@{user.username}</h2>
                    <h2 style={{ paddingBottom: '10%' }}>{user.email}</h2>
                    <hr id="user-card-hr"/>
                    <div className="place-member-since">
                        <div className="place">
                            <p>From</p>
                            {country && <p>{country}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {editNameModal && <EditNameModal user={user} />}
        </>
    )
}

export default ProfileCard;