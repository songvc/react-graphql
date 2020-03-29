import React from 'react';
import styled from 'styled-components';
import useFetch from 'use-http';
import StockTicker from './StockTicker';
import { Tab, TabContainer } from './Tabs';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";  

  
const Frame = styled.div`
    height: 100%;
`;

const ContainerByFour = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap;
`;

const ContainerByFourItem = styled.div`
    width: calc(100%/4);
`; 

const MarketContainer = styled.div`
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
        <ContainerByFour>
            <ContainerByFourItem>
                <TabContainer>
                    <Tab title={'Asia'}>
                        <div>
                            hello1
                        </div>
                    </Tab>
                    <Tab title={'US'}>
                        <div>
                            hello2
                        </div>
                    </Tab>
                    <Tab title={'Europe'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                    <Tab title={'FX'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                    <Tab title={'Rates'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                </TabContainer>
            </ContainerByFourItem>
            <ContainerByFourItem>
                <TabContainer>
                    <Tab title={'hello1'}>
                        <div>
                            hello1
                        </div>
                    </Tab>
                    <Tab title={'hello2'}>
                        <div>
                            hello2
                        </div>
                    </Tab>
                    <Tab title={'hello3'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                </TabContainer>
            </ContainerByFourItem>
            <ContainerByFourItem>
                <TabContainer>
                    <Tab title={'hello1'}>
                        <div>
                            hello1
                        </div>
                    </Tab>
                    <Tab title={'hello2'}>
                        <div>
                            hello2
                        </div>
                    </Tab>
                    <Tab title={'hello3'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                </TabContainer>
            </ContainerByFourItem>
            <ContainerByFourItem>
                <TabContainer>
                    <Tab title={'hello1'}>
                        <div>
                            hello1
                        </div>
                    </Tab>
                    <Tab title={'hello2'}>
                        <div>
                            hello2
                        </div>
                    </Tab>
                    <Tab title={'hello3'}>
                        <div>
                            hello3
                        </div>
                    </Tab>
                </TabContainer>
            </ContainerByFourItem>
        </ContainerByFour>
        <Header>Stock Market</Header>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
        <Header>Cryptocurrency Market</Header>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
        <Header>Forex Market</Header>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
    </Frame>
}

export default MainBoard;