import React, { useState } from 'react';
// import JoinModalOne from './JoinModal';
// import JoinModelTwo from './JoinModal2';
// import SigninModal from './SigninModal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as modalActions from '../../store/modals';
import * as sessionActions from '../../store/session';
import './newNavStyles.css';
import { Link } from 'react-router-dom';
import TennerIcon from '../../snippets/TennerIcon';


function NewNav (sessionUser) {
    const dispatch = useDispatch();
    const history = useHistory(); // History stack
    const [showDropDownMenu, setShowDropDownMenu] = useState(false)
    
    function handleDropDownClick(option) {

        if (option === 'profile') {
            history.push('/profile')
        } else {
            dispatch(sessionActions.logout());
            history.push('/')
        }

        setShowDropDownMenu(false)
            
    }

    console.log(sessionUser)

    if (sessionUser) {
        return (
            <div className="signed-in-nav">
                <TennerIcon />
                <button onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
                    sessionUser{/* {sessionUser.username} */}
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
        )
    } else {
        return (
            <div className="signed-out-nav">
                <TennerIcon />
            </div>
        )
    }

    // const joinModal1 = useSelector(state => state.modal.joinModal1)
    // const joinModal2 = useSelector(state => state.modal.joinModal2)
    // const signinModal = useSelector(state => state.modal.signinModal)
    // // const sessionUser = useSelector(state => state.session.user)
    // const [formData, setFormData] = useState({
    //     email: '', username: '', password: '', text: ''
    // });
    // const [showDropDownMenu, setShowDropDownMenu] = useState(false);

    // function handleMenuClick(option) {
    //     if (option === 'profile') {
    //         history.push('/profile');
    //     } else if (option === 'logout') {
    //         dispatch(sessionActions.logout());
    //         history.push('/');
    //     }
    //     setShowDropDownMenu(false);
    // }

    return (
        <>
            <div className="nav-items">
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <h1 id="logo">Tenner.</h1>
                </Link>
                {/* {sessionUser ? (
                    <>
                        <div className="button-profile-container">
                            <button className="button-profile-icon" onClick={() => setShowDropDownMenu(!showDropDownMenu)}>
                                {sessionUser.username[0]}
                            </button>
                            {showDropDownMenu && (
                                <div className="menu-container">
                                    <button className="menu-option" onClick={() => handleMenuClick('profile')}>
                                        Profile
                                    </button>
                                    <hr className="dropdown-hr"></hr>
                                    <button className="menu-option" onClick={() => handleMenuClick('logout')}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="buttons-container">
                        <button className="button-signin" onClick={() => dispatch(modalActions.showSignin())}>
                            Sign In
                        </button>
                        <button className="button-join" onClick={() => dispatch(modalActions.showJoinOne())}>
                            Join
                        </button>
                    </div>
                )} */}
                {/* {joinModal1 && <JoinModalOne formData={formData} setFormData={setFormData} />}
                {joinModal2 && <JoinModelTwo formData={formData} setFormData={setFormData} />}
                {signinModal && <SigninModal />} */}
            </div>

        </>
    );
}

export default NewNav;