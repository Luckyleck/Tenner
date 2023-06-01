import React, { useState } from 'react';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform search or any other action with the search value
        console.log('Search:', searchValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;