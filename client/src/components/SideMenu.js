import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: #222222;
    width: 100px;
    height: 100%;
`;
const Items = styled.div`
    background-color: #222222;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px;
    padding: 5px 0px;
`;
const SideMenu = () => {
    return <Container>
        <Items>
            <Link to="/">hello</Link>
        </Items>
        <Items>
            <Link to="/">hello</Link>
        </Items>
        <Items>
            <Link to="/">hello</Link>
        </Items>
        <Items>
            <Link to="/">hello</Link>
        </Items>
        <Items>
            <Link to="/">hello</Link>
        </Items>
    </Container>
}

export default SideMenu;
