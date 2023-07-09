import React from 'react'
import { useSelector } from 'react-redux'
import GigCard from '../Splash/GigList/GigCard'

function SearchResultsIndex() {
    const { gigs } = useSelector(state => state.search.gigs)
    const query = useSelector(state => state.search.gigs.query);

    if (!gigs) {
        return <h1>Loading..</h1>
    }

    return (
        <div>
            <h1>Results for {query}</h1>
            <div className="gig-card-container">
            {gigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
            ))}
            </div>
        </div>
    )
}

export default SearchResultsIndex
