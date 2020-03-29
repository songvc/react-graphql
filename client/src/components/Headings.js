import React from 'react';
import styled from 'styled-components';

const HeadingOnes = styled.h1`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;
`;

const HeadingTwos = styled.h2`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;
`;

const HeadingThrees = styled.h3`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;
`;

const HeadingFours = styled.h4`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;
`;

const HeadingFives = styled.h5`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;
`;


export const HeadingOne = ({children}) => {
    return <HeadingOnes>{children}</HeadingOnes>
}

export const HeadingTwo = ({children}) => {
    return <HeadingTwos>{children}</HeadingTwos>
}

export const HeadingThree = ({children}) => {
    return <HeadingThrees>{children}</HeadingThrees>
}

export const HeadingFour = ({children}) => {
    return <HeadingFours>{children}</HeadingFours>
}

export const HeadingFive = ({children}) => {
    return <HeadingFives>{children}</HeadingFives>
}
// export default HeadingOne;