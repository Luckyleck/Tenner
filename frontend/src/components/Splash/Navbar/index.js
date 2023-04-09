import React, { useState } from 'react';
import JoinModalOne from './JoinModal';
import JoinModelTwo from './JoinModal2';
import SigninModal from './SigninModal';
import IconModal from './IconModal';
import { useDispatch, useSelector } from 'react-redux';
import * as modalActions from '../../../store/modals';
import * as sessionActions from '../../../store/session';
import './index.css';

function Navbar() {

    const dispatch = useDispatch();
    const joinModal1 = useSelector(state => state.modal.joinModal1)
    const joinModal2 = useSelector(state => state.modal.joinModal2)
    const signinModal = useSelector(state => state.modal.signinModal)
    const iconModal = useSelector(state => state.modal.iconModal)
    const sessionUser = useSelector(state => state.session.user)
    const [formData, setFormData] = useState({
        email: '', username: '', password: '', text: ''
    });
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuClick(option) {
        if (option === 'profile') {
            // TODO: Handle profile click
            console.log('Profile clicked');
        } else if (option === 'logout') {
            dispatch(sessionActions.logout());
        }
        setShowMenu(false);
    }

    return (
        <>
            <div className="nav-items">
                <h1>Tenner</h1>
                {sessionUser ? (
                    <>
                        <div className="button-profile-container">
                            <button className="button-profile-icon" onClick={() => setShowMenu(!showMenu)}>
                                {sessionUser.username[0]}
                            </button>
                            {showMenu && (
                                <div className="menu-container">
                                    <p>{sessionUser.username}</p>
                                    <p>{sessionUser.email}</p>
                                    <hr className="dropdown-hr"></hr>
                                    <button className="menu-option" onClick={() => handleMenuClick('profile')}>
                                        Profile
                                    </button>
                                    <button className="menu-option" onClick={() => handleMenuClick('logout')}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="buttons">
                        <button className="button-signin" onClick={() => dispatch(modalActions.showSignin())}>
                            Sign In
                        </button>
                        <button className="button-join" onClick={() => dispatch(modalActions.showJoinOne())}>
                            Join
                        </button>
                    </div>
                )}
                {joinModal1 && <JoinModalOne formData={formData} setFormData={setFormData} />}
                {joinModal2 && <JoinModelTwo formData={formData} setFormData={setFormData} />}
                {signinModal && <SigninModal />}
            </div>

        </>
    );
}

export default Navbar;