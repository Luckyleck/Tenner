import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';
import Navbar from '../Splash/Navbar';
import './GigShowStyles.css'
import GigShowcase from './GigShowcase/GigShowcase';

function GigShow() {
    const { gigId } = useParams();
    const dispatch = useDispatch();
    const gig = useSelector((state) => state.gigs[gigId]);
    const [seller, setSeller] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    useEffect(() => { // Fetching seller associated with Gig
        fetch(`api/users/${gig.seller_id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("seller data:", data);
                setSeller(data.user);
            })
            .catch((error) => {
                console.error("Error fetching seller:", error);
                setError(error);
            });
    }, []);


    if (!gig) {
        return <div>Loading...</div>;
    }

    return (
        <div className="all-page">
            <div className="header">
                <Navbar />
            </div>
            <div className='main-content'>
                {seller ? (
                    <GigShowcase gig={gig} seller={seller} />
                ) : (
                    <div>Loading seller information...</div>
                )}
                {/* <GigReview review={review}/> */}
            </div>
        </div>
    );
}

export default GigShow;