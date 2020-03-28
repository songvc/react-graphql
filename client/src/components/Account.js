import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Frame = styled.div`
    padding: 10px;
`;
const Container = styled.div`
    width: 100%;
    padding: 10px;
`;
const AccountDetails = () => {
    const session = useSelector(state => state.session);
    console.log('session',session);
    return <Frame>
        <Container>
            <div>AccountDetails</div>
            <div>email: {session.user.email} </div>
            <div>id: {session.user.id}</div>
        </Container>
    </Frame>
}

export default AccountDetails;