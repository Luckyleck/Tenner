import React from 'react';
import JoinModalOne from './JoinModal'; 
import JoinModelTwo from './JoinModal2';
import SigninModal from './SigninModal';
import { useDispatch, useSelector } from 'react-redux';
import * as modalActions from '../../../store/modals'
import './index.css';

function Navbar() {
    const dispatch = useDispatch();
    const joinModal1 = useSelector(state => state.modal.joinModal1)
    const joinModal2 = useSelector(state => state.modal.joinModal2)
    const signinModal = useSelector(state => state.modal.signinModal)

    return (
        <div className="nav-items">
            <h1>Tenner</h1>
            <div className="buttons">
                <button className="button-signin" onClick={() => dispatch(modalActions.showSignin())}>
                    Sign In
                </button>
                <button className="button-join" onClick={() => dispatch(modalActions.showJoinOne())}>
                    Join
                </button>
            </div>
            {joinModal1 && <JoinModalOne />}
            {joinModal2 && <JoinModelTwo />}
            {signinModal && <SigninModal />}
        </div>
    );
}

export default Navbar;