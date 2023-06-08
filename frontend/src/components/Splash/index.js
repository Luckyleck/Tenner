import React from 'react';
import './SplashStyles.css';
import { useSelector } from 'react-redux';
import GigsList from '../GigList';
import GTAvideo from '../../assets/GTA_loading_screens.mp4'

function Splash() {

    const sessionUser = useSelector(state => state.session.user)
    const shouldHideOverflow = !sessionUser;

    return (
        <div className={`main-content ${shouldHideOverflow ? 'overflow-hidden' : ''}`}>
            {
                sessionUser ?
                    <div className="gig-list-container">
                        <h2>Our best gigs</h2>
                        <GigsList />
                    </div>
                    :
                    <>
                        <video id="videoBG" src={GTAvideo} autoPlay loop muted />
                        <div className="slogan-text">
                            <h1>
                                Find the perfect
                                <span className="italic"> freelance </span>
                                services for your business
                            </h1>
                        </div>
                    </>
            }
        </div>
    )
}

export default Splash;