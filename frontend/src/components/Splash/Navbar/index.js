import React, { useState } from 'react';
import JoinModal from './JoinModal'; // import the JoinModal component
import './index.css';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="nav-items">
            <h1>Tenner</h1>
            <div className="buttons">
                <button onClick={() => console.log('clicked')}>Sign In</button>
                <button className="button-join" onClick={toggleModal}>
                    Join
                </button>
            </div>
            {isModalOpen && <JoinModal ModalToggle={toggleModal} />}
        </div>
    );
}

export default Navbar;