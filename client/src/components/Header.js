import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`   
    display: flex;
    flex-display: row;
    background-color: #5f5dff;
    height: 40px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    color: white;
    cursor: pointer;
    display: flex;
    :hover {
        background-color: black;
    }
`;

const Filler = styled.div`
    width: 80%;
`

const Header = () => {
    return <Container>
        <Item>
            <Link to="/">icon</Link>
        </Item>
        <Item>
            <Link to="/home">home</Link>
        </Item>
        <Item>
            <Link to="/product">products</Link>
        </Item>
        <Filler>

        </Filler>
        <Item>
            <Link to="/login">login</Link>
        </Item>
        <Item>
            <Link to="/signup">signup</Link>
        </Item>
    </Container>
}

export default Header;