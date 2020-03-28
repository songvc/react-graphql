import React, { useState } from 'react';

const SearchBar = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const handleChange = (e) => {
        
    }
    return <div>
        <Input type='text' value={searchTerm} onChange={handleChange}/>
    </div>
}

export default SearchBar;
