import React from 'react';
import styled from 'styled-components';
import styledProps from 'styled-props';
import { darken } from 'polished';

const Label = styled.label`
    display: block;
`;  

const Inputs = styled.input`
    margin: 10px 0px;
    width: 200px;
    height: 30px;
    display: block;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
    padding: 0px 5px;
    :focus {
        color: #495057;
        background: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`;

const Input = (props) => {
    return <Inputs {...props} /> 
}

export default Input;