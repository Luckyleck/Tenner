import React, { useState } from 'react';
import JoinModal from './JoinModal'; // import the JoinModal component
import SecondModal from './JoinModal2';
import { useDispatch, useSelector } from 'react-redux';
import * as modalActions from '../../../store/modals'
import './index.css';

function Navbar() {
    const dispatch = useDispatch();
    const joinModal1 = useSelector(state => state.modal.joinModal1)
    const joinModal2 = useSelector(state => state.modal.joinModal2)
    const signinModal = useSelector(state => state.modal.signinModal)

    if (joinModal1) {
        console.log('joinModal1')
    }

    return (
        <div className="nav-items">
            <h1>Tenner</h1>
            <div className="buttons">
                <button className="button-signin" onClick={() => dispatch(modalActions.showSignIn())}>
                    Sign In
                </button>
                <button className="button-join" onClick={() => dispatch(modalActions.showJoinOne())}>
                    Join
                </button>
            </div>
            {joinModal1 && <JoinModal />}
            {joinModal2 && <SecondModal />}
        </div>
    );
}

export default Navbar;