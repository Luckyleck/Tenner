import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGig } from '../../store/gigs';
import './GigShowStyles.css'
import GigShowcase from './GigShowcase';
import PurchaseModal from './PurchaseBox';

function GigShow() {
    const dispatch = useDispatch();
    const { gigId } = useParams();
    const gig = useSelector((state) => state.gigs[gigId]);
    let purchaseModal = useSelector((state) => state.modal.purchaseModal);

    if (gig) purchaseModal = true

    useEffect(() => {
        dispatch(fetchGig(gigId));
    }, [dispatch, gigId]);

    if (!gig) {
        return <div></div>;
    }

    return (
        <div className="all-page">
            <div className='gig-show-main-content'>
                <div className='gig-showcase'>
                    <GigShowcase gig={gig} />
                    <div className="purchase-modal">
                        {purchaseModal && <PurchaseModal price={gig.base_price} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GigShow;
