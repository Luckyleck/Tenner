import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGigs } from '../../store/gigs'
import { removeSearch } from '../../store/search';

// Styles in Navbar

function TennerIcon() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(fetchGigs());
        // dispatch(removeSearch());
    }

    return (
        <Link id="logo-clicked" to="/" onClick={handleClick}>
            {/* <h1 id='Logo'>
                Tenner
            </h1> */}
            <img
                id="logo"
                src="https://gcdnb.pbrd.co/images/aUgY95TlnT6k.png?o=1"
                alt="tenner logo">
            </img>
        </Link>
    )
}

export default TennerIcon;