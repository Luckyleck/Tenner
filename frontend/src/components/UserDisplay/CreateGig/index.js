import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function CreateGig() {
    const dispatch = useDispatch();
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    const [showCreateGig, setShowCreateGig] = useState(false);

    function overlayClick() {
        setShowCreateGig(!showCreateGig)
    }

    function handleBodyChange(e) {
        setBody(e.target.value)
    }

    function handleSave() {
        if (body.trim() === '') {
            setError('Please write something')
        } else {
            const review = {
                body,
                reviewer_id: sessionUser.id,
                gig_id: gig.id
            }
            dispatch(createReview(review));
            updateReviews(review);
            setShowCreate(!showCreate);
            setBody('');
            // setReviews((prevReviews) => [...prevReviews, review]);
        }
    }

  return (
    <div>
      
    </div>
  )
}

export default CreateGig;