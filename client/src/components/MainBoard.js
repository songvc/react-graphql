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
const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 


const MainBoard = () => {
    const options = {
        data: []
    }
    const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    console.log('dfg', data);

    return <Frame>
        <Container>
        {error && 'error!'}
        {loading && 'loading'}
        {data.map((ticker,i) => {
            return <StockTicker key={i} {...ticker} />
        })}
        </Container>
    </Frame>
}

export default MainBoard;