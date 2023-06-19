import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GigCard from "./GigCard";
import { fetchGigs, searchGigs } from "../../store/gigs";
import './GigListStyles.css'

function GigsList() {
    const dispatch = useDispatch();
    const gigs = useSelector((state) => Object.values(state.gigs))
    const { search } = useSelector((state) => state.search) // deconstructed

    
    useEffect(() => {
        if (search) {
            dispatch(searchGigs(search));
        } else {
            dispatch(fetchGigs());
        }
    }, [dispatch, search]);

    if (!gigs) {
        return null
    }

    return (
        <div className="gig-card-container">
            <h2>Our Best Gigs</h2>
            {gigs.length === 0 && <h1>No Services Found For Your Search</h1>}
            {search && <h1>Results for {search}</h1>}
            {gigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
            ))}
        </div>
    );
}

export default GigsList;