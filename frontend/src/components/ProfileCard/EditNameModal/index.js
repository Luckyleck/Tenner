import React from 'react';
import * as sessionActions from '../../../store/session.js'
import * as modalActions from '../../../store/modals.js'


function EditNameModal() {
    const sessionUser = useSelector(state => state.session.user)
    const [fname, setFname] = useState(sessionUser.fname);
    const [lname, setLname] = useState(sessionUser.lname);

    function handleFnameChange(e) {
        setFname(e.target.value)
    }

    function handleLnameChange(e) {
        setLname(e.target.value)
    }

    function handleSave() {

    }

    return (
        <div className="edit-container">
            <input
                className='modal-input'
                type='text'
                name='fname'
                value={fname}
                placeholder={fname}
                onChange={handleFnameChange}
            />
            <input
                type='text'
                className='modal-input'
                name='lname'
                value={lname}
                placeholder={lname}
                onChange={handleLnameChange}
            />
            <button className='modal-button' onClick={handleSave}>Save</button>
        </div>
    )
}

export default EditNameModal;