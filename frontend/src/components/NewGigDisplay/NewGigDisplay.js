import React from 'react'

import GigInfo from './GigInfo';
import GigReviews from './GigReviews';
import PurchaseBox from './PurchaseBox';


function NewGigDisplay() {
    return (
        <div>
            <GigInfo />
            <PurchaseBox />
            <GigReviews />
        </div>
    )
}

export default NewGigDisplay;
