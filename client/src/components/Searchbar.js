import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`; 
// const Input = styled.input`
//     display: block;
//     width: 150px;
//     height: 30px;
//     border: 1px solid rgba(34,36,38,.15);
//     margin-right: 5px;
//     color: rgba(0,0,0,.87);
//     border-radius: .28571429rem;
//     :focus {
//         outline: none;
//     }
// `;

// const Buttons = styled(Button)`
//     && {
//         height: 25px;
//     }
// `;

const Searchbar = () => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return <Container>
        <Input type='text' placeholder='Search for Ticker Symbol'value={searchTerm} onChange={handleChange}/>
        {/* <Button>Search</Button> */}
    </Container>
}

export default Searchbar;
