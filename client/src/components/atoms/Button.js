import React from 'react';
import styled, { css } from 'styled-components';
import styledProps from 'styled-props';
import { darken } from 'polished';

const background = {
    primary: '#5f5dff',
    danger: '#DD2C00',
    success: '#7CB342',
    info: 'white',
    disabled: '#aaa'
};
  
const color = {
    primary: 'white',
    danger: 'black',
    success: 'black',
    info: 'black',
    disabled: 'black'
};

const backgroundDarkens = {
    // darken is the function imported from polished
    primary: darken(0.20, 'white'),
    danger: darken(0.20, '#DD2C00'),
    success: darken(0.20, '#7CB342'),
    info: darken(0.20, '#dcdcdc'),
    disabled: darken(0.20, '#aaa')
};

const size = {
    padding: {
        small: 10,
        medium: 20,
        big: 30,
    },
    borderRadius: {
        small: 5,
        default: 10,
    }
};

const Buttons = styled.button`
    background: ${styledProps(background, 'background')};
    color: ${styledProps(color, 'color')};
    display: inline-block;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);

    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${props => styledProps(backgroundDarkens, 'backgroundDarkens')};
    }

    ${props => props.disabled && css`
        :disabled {
            background: ${styledProps(background, 'background')};
            color: ${styledProps(color, 'color')};
            border: 1px solid grey;            
        }
        :disabled:hover {
            cursor: not-allowed;
            background: ${styledProps(backgroundDarkens, 'backgroundDarken')}
        }
    `}
`;

const Button = ({children, ...props}) => {
    return <Buttons {...props}>{children}</Buttons>
}

Button.defaultProps = {
    color: 'primary',
    background: 'primary',
    backgroundDarkens: 'primary'
};
  
export default Button;