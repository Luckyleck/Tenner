import React, { useState } from 'react'
import './PurchaseModalStyles.css'


function PurchaseModal ({ price }) {
    const [clicked, setClicked] = useState(false)

    function handlePurchase() {
        setClicked(!clicked);
    }
    return (<>
            <div className="price-selector">
                <h2>Basic</h2>
            </div>
            <div className="purchase-modal-main-contents">
                <h1>${Math.floor(price / 5) * 5}</h1>
                <h3>Save up to 20% by signing up today</h3>
                <button id="purchase-gig-button" onClick={handlePurchase}>Continue</button>
                {clicked && <h1 id="easterEgg">DON'T PURCHASE THINGS FROM STRANGE SITES!</h1>}
            </div>
            
            </>
    )
}

export default PurchaseModal;