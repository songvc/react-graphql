import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: block;
`;  

const Inputs = styled.input`
    margin: 10px 0px;
    width: 200px;
    height: 30px;
    display: block;
    :focus {
        outline: none;
    }
`;

const Input = ({ props }) => {
    return <Inputs {...props} /> 
}
export default Input;