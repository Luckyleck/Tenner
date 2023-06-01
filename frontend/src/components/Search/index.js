import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as searchActions from '../../store/search'

function SearchBar() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search.search);
    const [inputValue, setInputValue] = useState(searchValue);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchActions.setSearch(inputValue));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    placeholder="Search"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;