import React from 'react';
import styled from 'styled-components';
import useFetch from 'use-http';
import StockTicker from './StockTicker';

const Frame = styled.div`
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap;
    height: 550px;
`
const Header = styled.h1`
    border-bottom: 1px solid gray;
    padding: 15px 0px;
    margin: 0px 20px;

`;
const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 


const MainBoard = () => {
    const options = {
        data: []
    }
    const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);

    console.log('dfg', data);
    const filtered = data.filter((data,i) => i < 50);

    return <Frame>
        <Header>Stock Market</Header>
            <Container>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </Container>
        <Header>Cryptocurrency Market</Header>
            <Container>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </Container>
        <Header>Forex Market</Header>
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