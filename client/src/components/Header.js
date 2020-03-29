import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`   
    display: flex;
    flex-display: row;
    background-color: #5f5dff;
    height: 40px;
`;

const Item = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: white;
    cursor: pointer;
    display: flex;
    :hover {
        background-color: black;
    }

`;

const Dropdown = styled.div`
    display: block;
`; 

const Filler = styled.div`
    flex-grow: 1;
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
            <Link to="/home">Home</Link>
        </Item>
        <Item>
            <Link to="/product">Products</Link>
        </Item>
        <Item>
            <Searchbar />
        </Item>
        <Filler>

        </Filler>
        <Item>
            <FontAwesomeIcon icon={faBell} size="lg" />
        </Item>
        <Item>
            <Link to="/login">{(session)? session.user.email : 'Login'}</Link>
        </Item>
        <Item>
            <Link to="/signup">Signup</Link>
        </Item>
    </Container>
}

export default Header;
