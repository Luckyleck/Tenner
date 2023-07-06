import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as modalActions from '../../store/modals';
import * as sessionActions from '../../store/session';
import { fetchGigs } from '../../store/gigs';
import { FaLinkedin, FaGithub } from "react-icons/fa";


import SearchBar from '../Search';
import SigninModal from '../Modals/SigninModal'
import JoinModalOne from '../Modals/JoinModal';
import JoinModalTwo from '../Modals/JoinModal2';

import './newNavStyles.css';

function NewNav() {
    const dispatch = useDispatch();
    const history = useHistory(); // History stack
    const sessionUser = useSelector(state => state.session.user)
    const modals = useSelector(state => state.modal)

    const [showDropDownMenu, setShowDropDownMenu] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        text: ''
    });

    function handleDropDownClick(option) {

        if (option === 'profile') {
            history.push('/profile')
        } else {
            dispatch(sessionActions.logout());
            history.push('/')
        }

        setShowDropDownMenu(false)

    }

    function handleClick() {
        dispatch(fetchGigs());
    }

    return (
        <>
            {
                sessionUser ?
                    <div className="signed-in-nav">
                        <div className="logo">
                            <Link to="/" onClick={handleClick}>
                                <h1>Tenner</h1>
                            </Link>
                            <svg class="logo-period" viewBox="0 0 10 10"><circle cx="5" cy="5" r="1" /></svg>
                        </div>
                        <SearchBar />

                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/alexthelecky1875273" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href="https://github.com/luckyleck" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="social-icon" />
                            </a>
                            <button id="profile-icon-button" onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
                                {sessionUser.photoUrl ? <img alt='user' src={sessionUser.photoUrl}></img> :
                                sessionUser.username[0]>sessionUser.username[0]}
                            </button>
                            {showDropDownMenu && (
                                <div className="menu-container">

                                    <button className="menu-option" onClick={() => handleDropDownClick('profile')}>
                                        Profile
                                    </button>
                                    <button className="menu-option" onClick={() => handleDropDownClick('logout')}>
                                        Logout
                                    </button>

                                </div>
                            )}
                        </div>
                    </div>

                    :
                    <div className="signed-out-nav">
                        <div className="logo">
                            <h1>Tenner</h1>
                            <svg class="logo-period" viewBox="0 0 10 10"><circle cx="5" cy="5" r="1" /></svg>
                        </div>
                        <div className="signed-out-buttons">

                            <button onClick={() => dispatch(modalActions.showSignin())}>
                                Sign In
                            </button>

                            <button onClick={() => dispatch(modalActions.showJoinOne())}>
                                Join
                            </button>

                        </div>
                    </div>
            }

            {/* Render active modals (true)*/}

            {modals.signinModal && <SigninModal />}
            {
                modals.joinModal1 &&
                <JoinModalOne
                    formData={formData}
                    setFormData={setFormData}
                />
            }
            {
                modals.joinModal2 &&
                <JoinModalTwo
                    formData={formData}
                    setFormData={setFormData}
                />
            }
        </>
    )


}

export default NewNav;