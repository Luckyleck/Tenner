import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createGig } from '../../../store/gigs'
import './CreateGigStyles.css'


function CreateGig() {
    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session.user.id)
    const [error, setError] = useState('');
    const [showCreateGig, setShowCreateGig] = useState(false);
    const [newGigImages, setNewGigImages] = useState(null);
    const [gigData, setGigData] = useState({
        title: '',
        description: '',
        base_price: '',
        seller_id: sessionUserId
    })
    const [imagePreviews, setImagePreviews] = useState([]);

    function handleFileChange(e) {
        //.files is a 'FileList' object, does not have slice method so we must first copy it into an array
        const files = [...e.target.files].slice(0, 4);
        setNewGigImages(files);

        const filePreviews = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (event) => {
                filePreviews.push(event.target.result);
                if (filePreviews.length === files.length) {
                    setImagePreviews(filePreviews);
                }
            };

            reader.readAsDataURL(file);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const updatedValue = name === 'base_price' ? Number(value.replace(/\D/g, '')) : value;

        setGigData(prevGigData => ({
            ...prevGigData,
            [name]: updatedValue
        }));
    }

    function overlayClick() {
        setShowCreateGig(!showCreateGig);
        setNewGigImages(null)
        setImagePreviews([])
    }

    function handleSave() {
        const newGigData = new FormData();
        newGigData.append('gig[title]', gigData.title)
        newGigData.append('gig[description]', gigData.description)
        newGigData.append('gig[base_price]', gigData.base_price)
        if (newGigImages.length) {
            newGigImages.forEach(image => {
                newGigData.append('gig[images][]', image)
            })
        }

        dispatch(createGig(newGigData));
        setShowCreateGig(!showCreateGig);
    }

    function handleDeleteImage(index) {
        const updatedImages = [...newGigImages];
        const updatedPreviews = [...imagePreviews];

        updatedImages.splice(index, 1);
        updatedPreviews.splice(index, 1);

        setNewGigImages(updatedImages);
        setImagePreviews(updatedPreviews);
    }


    if (!showCreateGig) {
        return (
            <button onClick={() => setShowCreateGig(!showCreateGig)}>Create Gig</button>
        )
    } else {
        return (
            <>
                <button onClick={() => setShowCreateGig(!showCreateGig)}>Create Gig</button>
                <div className="modal-overlay" onClick={overlayClick}></div>
                <div className="gig-create-modal-container">

                    <h1 className="modal-header">Create a gig</h1>
                    <p className="giginfo-p">title</p>
                    <input
                        className='modal-input'
                        type='text'
                        name='title'
                        value={gigData.title}
                        placeholder={gigData.title || "I will..."}
                        onChange={handleChange}
                    />
                    <p className="giginfo-p">description</p>
                    <textarea
                        type='text'
                        className='modal-input'
                        name='description'
                        value={gigData.description}
                        placeholder={gigData.description || "Tell us about your service, be descriptive"}
                        onChange={handleChange}
                    />
                    <p className="giginfo-p">price of your gig</p>
                    <input
                        type='text'
                        className='modal-input'
                        name='base_price'
                        value={gigData.base_price}
                        placeholder={gigData.base_price || "rounded to the nearest '5' ex. 60, 65..."}
                        onChange={handleChange}
                    />
                    <p className="giginfo-p">images of your gig. <span style={{ color: "grey" }}>Max 4</span></p>
                    <input className="add-gig-files" type="file" onChange={handleFileChange} multiple />
                    <div className="gig-images-container">
                        {imagePreviews.map((preview, index) => (
                            <div key={index} className="gig-image-preview-container">
                                <img
                                    src={preview}
                                    alt={`Preview ${index + 1}`}
                                    className="gig-image-preview"
                                />
                                <button
                                    className="delete-image-button"
                                    onClick={() => handleDeleteImage(index)}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    {error && <p className="errors">{error}</p>}
                    <button className='modal-button' onClick={handleSave}>Save</button>
                </div>
            </>
        )
    }
}


export default CreateGig;