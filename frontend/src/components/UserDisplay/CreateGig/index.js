import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createGig } from '../../../store/gigs'


function CreateGig() {
    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session.user.id)
    const [error, setError] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateGig, setShowCreateGig] = useState(false);
    const [gigData, setGigData] = useState({
        title: '',
        description: '',
        base_price: '',
        image: '',
        seller_id: sessionUserId
    })

    function handleChange(e) {
        const { name, value } = e.target;
        const updatedValue = name === 'base_price' ? Number(value) : value;

        setGigData(prevGigData => ({
            ...prevGigData,
            [name]: updatedValue
        }));
    }

    function overlayClick() {
        setShowCreateGig(!showCreateGig)
    }

    function handleSave() {
        dispatch(createGig(gigData));
        setShowCreateGig(!showCreateGig);
    }


    if (showCreateGig === false) {
        return (
            <button onClick={() => setShowCreateGig(!showCreateGig)}>Create Gig</button>
        )
    } else {
        return (
            <>
                <div className="modal-overlay" onClick={overlayClick}></div>
                <div className="useredit-modal-container">

                    <h1 className="modal-header">update your user info</h1>
                    <p className="userinfo-p">title</p>
                    <input
                        className='modal-input'
                        type='text'
                        name='title'
                        value={gigData.title}
                        placeholder={gigData.title}
                        onChange={handleChange}
                    />
                    <p className="userinfo-p">description</p>
                    <input
                        type='text'
                        className='modal-input'
                        name='description'
                        value={gigData.description}
                        placeholder={gigData.description}
                        onChange={handleChange}
                    />
                    <p className="userinfo-p">The price of your gig</p>
                    <input
                        type='text'
                        className='modal-input'
                        name='base_price'
                        value={gigData.base_price}
                        placeholder={gigData.base_price}
                        onChange={handleChange}
                    />
                    <p className="userinfo-p">url to image of your gig</p>
                    <input
                        type='text'
                        className='modal-input'
                        name='image'
                        value={gigData.image}
                        placeholder={gigData.image}
                        onChange={handleChange}
                    />
                    <button className='modal-button' onClick={handleSave}>Save</button>
                </div>
            </>
        )
    }
}


export default CreateGig;