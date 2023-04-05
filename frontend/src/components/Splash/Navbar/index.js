import React, { useState } from 'react';
import JoinModal from './JoinModal'; // import the JoinModal component
import SecondModal from './JoinModal/SecondModal/secondModal';
import './index.css';

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleSecondModal = () => {
        setSecondModalOpen(!secondModalOpen);
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
            {isModalOpen && <JoinModal ModalToggle={toggleModal} toggleSecondModal={toggleSecondModal}/>}
            {secondModalOpen && <SecondModal toggleSecondModal={toggleSecondModal}/>}
        </div>
    );
}

export default Navbar;