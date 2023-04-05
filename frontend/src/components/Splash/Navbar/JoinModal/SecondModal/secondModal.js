import React from 'react';
import './SecondModal.css'

function SecondModal({ toggleSecondModal }) {

    const handleJoin = () => {
        // fetch
        toggleSecondModal();
    }


    return (
        <>
            <div className='modal-overlay' onClick={toggleSecondModal} />
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
            </div>
        </>
    );
}

export default SecondModal;