import React from 'react';
import styled from 'styled-components';
import {
    Route, Switch
  } from "react-router-dom";  
import useFetch from 'use-http';
import StockTicker from '../StockTicker';
import { Tab, TabContainer } from '../Tabs';
import { HeadingOne } from '../Headings';

const Frame = styled.div`
    height: 100%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap;
`;

const LayoutByFour = styled.div`
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
const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 


const StockTickerList = () => {
    const options = {
        data: []
    }
    const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);

    console.log('dfg', data);
    const filtered = data.filter((data,i) => i < 30);

    return <Frame>
        <Row>
            <LayoutByFour>
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
            </LayoutByFour>
            <LayoutByFour>
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
            </LayoutByFour>
            <LayoutByFour>
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
            </LayoutByFour>
            <LayoutByFour>
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
            </LayoutByFour>
        </Row>
        <HeadingOne>Stock Market</HeadingOne>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
        <HeadingOne>Cryptocurrency Market</HeadingOne>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
        <HeadingOne>Forex Market</HeadingOne>
            <MarketContainer>
                {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })}
            </MarketContainer>
    </Frame>
}

export default StockTickerList;