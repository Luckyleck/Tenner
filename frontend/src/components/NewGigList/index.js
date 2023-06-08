import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGigs } from "../../store/gigs";
import './newGigListStyles.css'


function NewGigsList() {
    const dispatch = useDispatch();
    const gigs = useSelector((state) => Object.values(state.gigs));
    const { search } = useSelector((state) => state.search) // deconstructed

    return (
        <div>
            <h1>New Gigs List</h1>
        </div>
    )
}

export default NewGigsList;
