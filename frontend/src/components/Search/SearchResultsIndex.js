import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import GigCard from '../Splash/GigList/GigCard'
import './SearchResultsIndexStyles.css'

function SearchResultsIndex() {

    const gigs = useSelector(state => state?.search?.gigs?.gigs);
    const query = useSelector(state => state?.search?.gigs?.query);

    if (!gigs) {
        return <h1>Loading..</h1>
    }

    return (
        <>
            <div className="gig-list-container">
                {
                    gigs.length ?
                        <h4>Results for <span>{query}</span></h4>
                        :
                        <h4>Sorry no results for <span>{query}</span></h4>
                }

                <div className="gig-card-container">
                    {gigs?.map((gig) => (
                        <GigCard key={gig.id} gig={gig} />
                    ))}
                </div>
            </div>
            <div className="return-to-all-gigs">
                <Link to={`/`}>Return to all gigs...</Link>
            </div>

        </>

    )
}

export default SearchResultsIndex
