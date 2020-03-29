import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from '../Hooks/useRouter';

const Container = styled.div`
    width: 200px;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 5px;
`
const Symbol = styled.div`
    color: red;
`;

const StockTicker = ({ description, displaySymbol, symbol }) => {
    const router = useRouter();
    return <Container onClick={() => router.push(`/company/${symbol}`)}>
        <div>{description}</div>
        <Symbol>{displaySymbol}</Symbol>
    </Container>
}

export default StockTicker;