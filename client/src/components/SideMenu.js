import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faWallet, faStore, faComments } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from '../Hooks/useRouter';

const Container = styled.div`
    background-color: #222222;
    height: 100%;
`;

const Items = styled.div`
    background-color: #222222;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0px;
    padding: 10px 0px;
    cursor: pointer;
`;

const IconContainer = styled.div`
    margin-right: 5px;
`;

const SideMenu = () => {
    const router = useRouter();

    return <Container>
        <Items>
            <IconContainer>
                <FontAwesomeIcon icon={faHome} size="sm" />
            </IconContainer>
            <div>Home</div>
        </Items>
        <Items>
            <IconContainer>
                <FontAwesomeIcon icon={faNewspaper} size="sm" />    
            </IconContainer>
            <div>News</div>
        </Items>
        <Items>
            <IconContainer>
                <FontAwesomeIcon icon={faWallet} size="sm" />    
            </IconContainer>
            <div>Watch</div>
        </Items>
        <Items>
            <IconContainer>
                <FontAwesomeIcon icon={faStore} size="sm" />    
            </IconContainer>
            <div>Store</div>
        </Items>
        <Items>
            <IconContainer>
                <FontAwesomeIcon icon={faComments} size="sm" />    
            </IconContainer>
            <div>Forum</div>
        </Items>
    </Container>
}

export default SideMenu;
