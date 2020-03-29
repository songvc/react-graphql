import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from '../Hooks/useRouter';

const Container = styled.div`   
    display: flex;
    flex-display: row;
    background-color: #5f5dff;
    height: 50px;
`;

const Item = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 100%;
    color: white;
    cursor: pointer;
`;

// :hover {
//     background-color: black;
// }


const Red = styled.div`
    position: absolute;
    height: 5px;
    width: 5px; 
    border-radius: 50%; 
    background-color: red;
    top: 12.5px;
    right: 10px;
    
`; 

const Dropdown = styled.div`
    display: block;
`; 

const Filler = styled.div`
    flex-grow: 1;
`;


const Header = () => {
    const session = useSelector(state => state.session);
    const router = useRouter();
    console.log('header', session);
    if (session) {
        console.log('header', session.user.email);
    }

    return <Container>
        <Item onClick={() => router.push("/home")}>
            {/* <div>
                <FontAwesomeIcon icon={faGlobe} size="lg" />
            </div> */}
            <div>E.BIT.DA</div>
        </Item>
        {/* <Item>
            <div onClick={() => router.push("/home")}>Home</div>
        </Item>
        <Item>
            <div onClick={() => router.push("/product")}>Products</div>
        </Item> */}
        <Item>
            <Searchbar />
        </Item>
        <Filler>

        </Filler>
        <Item>
            <Red />
            <FontAwesomeIcon icon={faBell} size="lg" />
        </Item>
        <Item onClick={() => router.push("/login")}>
            <div>{(session)? session.user.email : 'Login'}</div>
        </Item>
        <Item onClick={() => router.push("/signup")}>
            <div>Sign up</div>
        </Item>
    </Container>
}

export default Header;
