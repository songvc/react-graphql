import React from 'react';
import styled from 'styled-components';
import useFetch from 'use-http';
import StockTicker from './StockTicker';

const Frame = styled.div`
    width: 100%;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 15px;
    flex-wrap: wrap;
`
const Header = styled.h1`
    border-bottom: 1px solid gray;
    margin: 15px 35px;

`;
const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 


const MainBoard = () => {
    const options = {
        data: []
    }
    const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    console.log('dfg', data);
    const filtered = data.filter((data,i) => i < 50);

    return <Frame>
        <Header>U.S. Stocks</Header>
            <Container>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </Container>
        <Header>Crypto</Header>
            <Container>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </Container>
        <Header>Forex</Header>
            <Container>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </Container>
    </Frame>
}

export default MainBoard;