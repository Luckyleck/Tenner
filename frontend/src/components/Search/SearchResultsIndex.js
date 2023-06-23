import React from 'react'
import { useSelector } from 'react-redux'
import GigCard from '../Splash/GigList/GigCard'

function SearchResultsIndex() {
    const { gigs } = useSelector(state => state.search)

    if (!gigs) {
        return <h1>Loading..</h1>
    }

    return (
        <div>
            <h1>Search Results Index</h1>
            <div className="gig-card-container">
            {gigs.map((gig) => (
                <GigCard key={gig.id} gig={gig} />
            ))}
            </div>
        </div>
    )
}

export default SearchResultsIndex
