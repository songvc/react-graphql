import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from '../Hooks/useRouter';

const Container = styled.div`   
    display: flex;
    flex-display: row;
    background-color: #5f5dff;
    height: 40px;
`;

const Item = styled.div`
    display: block;
    padding: 10px;
    height: 100%;
    color: white;
    cursor: pointer;
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
    const router = useRouter();
    console.log('header', session);
    if (session) {
        console.log('header', session.user.email);
    }

    return <Container>
        <Item>
            <div onClick={() => router.push("/")}>E.BIT.DA</div>
        </Item>
        <Item>
            <div onClick={() => router.push("/home")}>Home</div>
        </Item>
        <Item>
            <div onClick={() => router.push("/product")}>Products</div>
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
            <div onClick={() => router.push("/login")}>{(session)? session.user.email : 'Login'}</div>
        </Item>
        <Item>
            <div onClick={() => router.push("/signup")}>Signup</div>
        </Item>
    </Container>
}

export default Header;
