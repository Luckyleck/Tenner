import React from 'react'
import './GigShowcaseStyles.css'

function GigShowcase ({ gig, seller }) {
    return (
        <>
        <h1>{gig.title}</h1>
        <h1>{seller.username}</h1>
        </>
    )
}

export default GigShowcase;