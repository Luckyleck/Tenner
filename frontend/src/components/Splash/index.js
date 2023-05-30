import React from 'react';
import Navbar from './Navbar';
import './SplashStyles.css';
import { useSelector } from 'react-redux';
import GigsList from '../GigList';
import GTAvideo from '../../assets/GTA_loading_screens.mp4'

function Splash() {

    const sessionUser = useSelector(state => state.session.user)

    return (
        <div className="main-content">
            {
                sessionUser ?
                    <>
                        <h2>Our best gigs</h2>
                        <GigsList />
                    </>
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
                        {/* <div className="main-text">
                            <h1>
                                Find the perfect 
                                <span className="italic"> freelance </span>
                                 services for your business
                            </h1>
                        </div> */}
                    </>
            }
        </div>
    )


    // return (
    //     <div id='all-page'>
    //         {/* <div className='header'>
    //             {/* <Navbar className="nav" /> */}
    //             {!sessionUser &&
    //                 <div className="main-text">
    //                     <h1>Find the perfect <span className="italic">freelance</span> services for your business</h1>

    //                     {/* <img id="ten-pound" src="https://gcdnb.pbrd.co/images/AZpADIf24z6w.png?o=1" alt="10pound"/> */}
    //                 </div>}
    //         </div> */}
    //         {sessionUser &&        
    //         <div className='main-content'>
    //             <h2>Our best gigs</h2>
    //             <GigsList />
    //         </div>
    //         }   

    //     </div>
    // )
}

export default Splash;