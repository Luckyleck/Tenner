import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchSearchResults } from '../../store/search';
// import * as searchActions from '../../store/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
// faSearch is imported alone
// styles in navbar

function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!!inputValue) {
            dispatch(fetchSearchResults(inputValue));
            history.push(`/search`)
            setInputValue('')
        }
    };

    return (
        <div className="search-bar-container">
            <form onSubmit={handleSubmit} className="search-form">
                <label>
                    <input
                        type="text"
                        placeholder="What service are you looking for today?"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit" id="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;