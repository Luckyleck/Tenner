import React from 'react';
import './SecondModal.css'
import { useDispatch } from 'react-redux';
import * as modalActions from '../../../../store/modals'

function SecondModal() {
    const dispatch = useDispatch();

    function overlayClick() {
        dispatch(modalActions.hideJoinTwo())
    }

    function handleJoin() {
        console.log('Joined!')
    }

    return (
        <>
            <div className='modal-overlay' onClick={overlayClick} />
            <div className="modal-container">
                <h2 className="modal-header">Join Tenner</h2>
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Choose a username"
                />
                <input
                    type="text"
                    className="modal-input"
                    placeholder="Choose a password"
                />
                <button className="modal-button" onClick={handleJoin}>
                    Join
                </button>
                <p className="modal-signin">
                    Not a member yet? <a href="/login">Join now</a>
                </p>
            </div>
        </>
    );
}

export default SecondModal;