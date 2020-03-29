import React from 'react';
import styled, { css } from 'styled-components';
// border-radius: .28571429rem;
// border: 1px solid rgba(34,36,38,.15);


const Buttons = styled.button`
    display: inline-block;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
    cursor: pointer;
    :focus {
        outline: none;
    }
    :hover {
        background-color: black;
        color: white;
    }
    ${props => props.disabled && css`
        :disabled {
            background-color: #aaa;
            color: white;
            border: 1px solid grey;            
        }
        :disabled:hover {
            cursor: not-allowed;
        }
    `}
`;

const Button = ({ children, disabled }) => {
    // console.log('props button cihldren', children);
    return <Buttons disabled={disabled}>{children}</Buttons>
}

export default Button;