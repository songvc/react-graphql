import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Searchbar from './Searchbar';

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
    width: 200px;
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
    const session = useSelector(state => state.session);
    console.log('header', session);
    if (session) {
        console.log('header', session.user.email);
    }

    return <Container>
        <Item>
            <Link to="/">E.BIT.DA</Link>
        </Item>
        <Item>
            <Link to="/home">home</Link>
        </Item>
        <Item>
            <Link to="/product">products</Link>
        </Item>
        <Item>
            <Searchbar />
        </Item>
        <Filler>

        </Filler>
        <Item>
            <Link to="/login">{(session)? session.user.email : 'login'}</Link>
        </Item>
        <Item>
            <Link to="/signup">signup</Link>
        </Item>
    </Container>
}

export default Header;