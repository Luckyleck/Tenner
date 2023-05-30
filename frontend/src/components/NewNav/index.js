import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as modalActions from '../../store/modals';
import * as sessionActions from '../../store/session';

import TennerIcon from '../../static code/TennerIcon';
import SigninModal from '../Splash/Navbar/SigninModal';
import JoinModalOne from '../Splash/Navbar/JoinModal';
import JoinModalTwo from '../Splash/Navbar/JoinModal2';

import './newNavStyles.css';

function NewNav({ sessionUser }) {
    const dispatch = useDispatch();
    const history = useHistory(); // History stack
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

    modals.createReviewModal = true

    return (
        <>
            {
                sessionUser ?
                    <div className="signed-in-nav">
                        <TennerIcon />
                        <button onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
                            {sessionUser.username[0]}
                        </button>
                        {showDropDownMenu && (
                            <div className="dropdown-container">

                                <button onClick={() => handleDropDownClick('profile')}>
                                    Profile
                                </button>
                                <button onClick={() => handleDropDownClick('logout')}>
                                    Logout
                                </button>

                            </div>
                        )}
                    </div>
                    :
                    <div className="signed-out-nav z-index">
                        <TennerIcon />
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
            {modals.joinModal1 &&
                <JoinModalOne
                    formData={formData}
                    setFormData={setFormData}
                />
            }
            {modals.joinModal2 &&
                <JoinModalTwo
                    formData={formData}
                    setFormData={setFormData}
                />
            }
        </>
    )


}

export default NewNav;