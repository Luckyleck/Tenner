import React from 'react';
import Navbar from './Navbar';
import './SplashStyles.css'
import { useSelector } from 'react-redux';
import GigsList from '../GigList';

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
            {sessionUser &&        
            <div className='main-content'>
                <h2>Our best gigs</h2>
                <GigsList />
            </div>
            }   

        </div>
    )
}

export default Splash;