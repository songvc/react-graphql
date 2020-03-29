import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from '../Hooks/useRouter';
import {
    Route, Switch, Link
  } from "react-router-dom";  
// import CompanyDetails from './CompanyDetails';

const Container = styled.div`
    width: 200px;
    margin: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    cursor: pointer;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
`;
const Symbol = styled.div`
    color: #5f5dff;
`;
// onClick={() => router.push(`/company/${symbol}`)}

const StockTicker = ({ description, displaySymbol, symbol }) => {
    // console.log('match', match);
    const router = useRouter();
    return <Container onClick={() => router.push(`/company/${displaySymbol}`)} >
        <div>{description}</div>
        <Symbol>{displaySymbol}</Symbol>
        {/* <Link to={`/company/${symbol}`}>{displaySymbol}</Link> */}
    </Container>
}

export default StockTicker;