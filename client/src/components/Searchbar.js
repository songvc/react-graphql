import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: block;
    :focus {
        outline: none;
    }
`;

const Searchbar = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return <div>
        <Input type='text' value={searchTerm} onChange={handleChange}/>
    </div>
}

export default Searchbar;
