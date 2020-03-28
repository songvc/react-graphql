import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #222222;
    width: 5%;
`;
const Items = styled.div`
    background-color: #222222;
    color: white;
`;
const SideMenu = () => {
    return <Container>
        <Items>hello</Items>
        <Items>hello</Items>
        <Items>hello</Items>
        <Items>hello</Items>
        <Items>hello</Items>
    </Container>
}

export default SideMenu;
