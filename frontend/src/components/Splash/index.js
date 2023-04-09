import React from 'react';
import Navbar from './Navbar';
import './SplashStyles.css'
import { useSelector } from 'react-redux';

function Splash() {
    const sessionUser = useSelector(state => state.session.user)


    return (
        <div id='main-wrapper'>
            <div className='header'>

                <Navbar className="nav" />
                {!sessionUser &&
                 <div className="main-text">
                    <h1>Find the perfect <span className="italic">freelance</span> services for your business</h1>
                </div>}
                
            </div>

            <div className='main-content'>

            </div>

        </div>
    )
}

export default Splash;