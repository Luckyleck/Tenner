import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './styles.css'   

function Splash() {

    

    return (
        <div id='main-wrapper'>
            {/* <img src="https://live.staticflickr.com/833/41781543850_d281ae8bd9_b.jpg"/> */}
            <div className='header'>
                <Navbar className="nav" />
                <div className="main-text">
                    <h1>Find the perfect <span className="italic">freelance</span> services for your business</h1>
                </div>
            </div>

            <div className='main-content'>

            </div>

        </div>
    )
}

export default Splash;