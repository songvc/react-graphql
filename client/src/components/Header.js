import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`   
    display: flex;
    flex-display: row;
    background-color: #5f5dff;
    height: 40px;
`;

const Item = styled.div`
    height: 100%;
    width: 100px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
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
            icon
        </Item>
        <Item>
            home
        </Item>
        <Item>
            products
        </Item>
        <Filler>

        </Filler>
        <Item>
            login
        </Item>
        <Item>
            signup
        </Item>
    </Container>
}

export default Header;