import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GigCard from "./GigCard";
import { fetchGigs } from "../../store/gigs";
import './GigListStyles.css'

function GigsList() {
    const dispatch = useDispatch();
    const gigs = useSelector((state) => Object.values(state.gigs));
    const searchedTerm = useSelector((state) => state.search)

    useEffect(() => {
        dispatch(fetchGigs());
    }, [dispatch]);

    return (
        <div className="gig-card-container">
            {gigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
            ))}
        </div>
    );
}

export default GigsList;