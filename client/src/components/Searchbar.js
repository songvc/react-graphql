import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: block;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: 10rem;
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
