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

    function handleIcon() {
        if (iconModal) {
            console.log('hiding')
            return dispatch(modalActions.hideIconModal())
        } else {
            console.log('showing')
            return dispatch(modalActions.showIconModal())
        }
    }

    return (
        <>
            <div className="nav-items">
                <h1>Tenner</h1>
                {sessionUser ? (
                    <>
                        <button className="button-profile-icon" onClick={handleIcon}>
                            {sessionUser.username[0]}
                        </button>
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
                {iconModal && <IconModal />}
            </div>

        </>
    );
}

export default Navbar;