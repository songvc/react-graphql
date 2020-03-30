import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
    Route, Switch
  } from "react-router-dom";  
import useFetch from 'use-http';
import StockTicker from '../StockTicker';
import { Tab, TabContainer } from '../atoms/Tabs';
import { HeadingOne } from '../atoms/Headings';

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

const LayoutByThree = styled.div`
    width: calc(100%/3);
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
const TOKEN = "bq0i35nrh5rddd65hb2g"; 

const data = '[{"code":"mutualFund","currency":"USD","name":"US Mutual funds"},{"code":"indices","currency":"","name":"World Indices"},{"code":"US","currency":"USD","name":"US exchanges"},{"code":"RG","currency":"EUR","name":"NASDAQ OMX RIGA"},{"code":"IR","currency":"EUR","name":"IRISH STOCK EXCHANGE - ALL MARKET"},{"code":"ME","currency":"RUB","name":"MOSCOW EXCHANGE"},{"code":"T","currency":"JPY","name":"TOKYO STOCK EXCHANGE-TOKYO PRO MARKET"},{"code":"SS","currency":"CNY","name":"SHANGHAI STOCK EXCHANGE"},{"code":"IS","currency":"TRY","name":"BORSA ISTANBUL"},{"code":"JO","currency":"ZAc","name":"JOHANNESBURG STOCK EXCHANGE"},{"code":"CO","currency":"DKK","name":"OMX NORDIC EXCHANGE COPENHAGEN A/S"},{"code":"TL","currency":"EUR","name":"NASDAQ OMX TALLINN"},{"code":"JK","currency":"IDR","name":"INDONESIA STOCK EXCHANGE"},{"code":"TW","currency":"TWD","name":"TAIWAN STOCK EXCHANGE"},{"code":"PA","currency":"EUR","name":"NYSE EURONEXT - EURONEXT PARIS"},{"code":"VS","currency":"EUR","name":"NASDAQ OMX VILNIUS"},{"code":"HM","currency":"EUR","name":"HANSEATISCHE WERTPAPIERBOERSE HAMBURG"},{"code":"L","currency":"GBP","name":"LONDON STOCK EXCHANGE"},{"code":"AX","currency":"AUD","name":"ASX - ALL MARKETS"},{"code":"BA","currency":"ARS","name":"BOLSA DE COMERCIO DE BUENOS AIRES"},{"code":"F","currency":"EUR","name":"DEUTSCHE BOERSE AG"},{"code":"NZ","currency":"NZD","name":"NEW ZEALAND EXCHANGE LTD"},{"code":"SI","currency":"USD","name":"SINGAPORE EXCHANGE"},{"code":"MU","currency":"EUR","name":"BOERSE MUENCHEN"},{"code":"SW","currency":"USD","name":"SWISS EXCHANGE"},{"code":"HE","currency":"EUR","name":"NASDAQ OMX HELSINKI LTD."},{"code":"IC","currency":"ISK","name":"NASDAQ OMX ICELAND"},{"code":"SZ","currency":"CNY","name":"SHENZHEN STOCK EXCHANGE"},{"code":"DB","currency":"AED","name":"DUBAI FINANCIAL MARKET"},{"code":"V","currency":"CAD","name":"TSX VENTURE EXCHANGE - NEX"},{"code":"MI","currency":"EUR","name":"MARKET FOR INVESTMENT VEHICULES"},{"code":"BE","currency":"EUR","name":"BOERSE BERLIN"},{"code":"TA","currency":"ILa","name":"TEL AVIV STOCK EXCHANGE"},{"code":"SA","currency":"BRL","name":"BM\u0026FBOVESPA S.A. - BOLSA DE VALORES, MERCADORIAS E FUTUROS"},{"code":"LS","currency":"EUR","name":"NYSE EURONEXT - EURONEXT LISBON"},{"code":"QA","currency":"QAR","name":"QATAR EXCHANGE"},{"code":"BK","currency":"THB","name":"STOCK EXCHANGE OF THAILAND"},{"code":"KQ","currency":"KRW","name":"KOREA EXCHANGE (KOSDAQ)"},{"code":"CN","currency":"CAD","name":"CANADIAN NATIONAL STOCK EXCHANGE"},{"code":"NS","currency":"INR","name":"NATIONAL STOCK EXCHANGE OF INDIA"},{"code":"AT","currency":"EUR","name":"ATHENS EXCHANGE S.A. CASH MARKET"},{"code":"MX","currency":"MXN","name":"BOLSA MEXICANA DE VALORES (MEXICAN STOCK EXCHANGE)"},{"code":"CR","currency":"","name":"CARACAS STOCK EXCHANGE"},{"code":"VI","currency":"EUR","name":"WIENER BOERSE AG DRITTER MARKT (THIRD MARKET)"},{"code":"SG","currency":"EUR","name":"BOERSE STUTTGART"},{"code":"BR","currency":"EUR","name":"NYSE EURONEXT - EURONEXT BRUSSELS"},{"code":"KS","currency":"KRW","name":"KOREA EXCHANGE (STOCK MARKET)"},{"code":"SN","currency":"CLP","name":"SANTIAGO STOCK EXCHANGE"},{"code":"TO","currency":"CAD","name":"TORONTO STOCK EXCHANGE"},{"code":"BD","currency":"HUF","name":"BUDAPEST STOCK EXCHANGE"},{"code":"WA","currency":"PLN","name":"WARSAW STOCK EXCHANGE/EQUITIES/MAIN MARKET"},{"code":"HK","currency":"HKD","name":"HONG KONG EXCHANGES AND CLEARING LTD"},{"code":"PR","currency":"CZK","name":"PRAGUE STOCK EXCHANGE"},{"code":"SAU","currency":"SAR","name":"SAUDI STOCK EXCHANGE"},{"code":"DU","currency":"EUR","name":"BOERSE DUESSELDORF"},{"code":"PA","currency":"EUR","name":"NYSE EURONEXT - MARCHE LIBRE PARIS"},{"code":"ST","currency":"SEK","name":"NASDAQ OMX NORDIC"},{"code":"AS","currency":"EUR","name":"NYSE EURONEXT - EURONEXT AMSTERDAM"},{"code":"KL","currency":"MYR","name":"BURSA MALAYSIA"},{"code":"OL","currency":"NOK","name":"OSLO BORS ASA"},{"code":"DE","currency":"EUR","name":"XETRA"},{"code":"NE","currency":"CAD","name":"AEQUITAS NEO EXCHANGE"},{"code":"BC","currency":"COP","name":"BOLSA DE VALORES DE COLOMBIA"},{"code":"BO","currency":"INR","name":"BSE LTD"},{"code":"VN","currency":"VND","name":"Vietnam exchanges including HOSE, HNX and UPCOM"}]';

const StockTickerList = () => {

    const [ stockExchange, setStockExchange ] = useState([]);
    const [ forexExchange, setForexExchange ] = useState([]);
    const [ cryptoExchange, setCryptoExchange ] = useState([]);

    // const options = {
    //     data: []
    // }
    const { request, response } = useFetch(BASEURL);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);
    // const { loading, error, data } = useFetch(BASEURL + `/stock/symbol?exchange=US&token=${TOKEN}`, options, []);

    // console.log('dfg', data);
    // const filtered = data.filter((data,i) => i < 30);

    const getStockExchange = async () => {
        const stocks = await request.get(`/stock/exchange&token=${TOKEN}`);
        console.log('profile', stocks);
        if (stocks) {
            setStockExchange(stocks);
        }
    }

    const getForexExchange = async () => {
        const forex = await request.get(`/forex/exchange&token=${TOKEN}`);
        console.log('forex', forex);
        if (forex) {
            setForexExchange(forex);
        }
    }
 
    const getCryptoExchange = async () => {
        const cryptos = await request.get(`/crypto/price-target&token=${TOKEN}`);
        console.log('cryptos', cryptos);
        if (cryptos) {
            setCryptoExchange(cryptos);
        }
    }

    // useEffect(() => {
    //     getStockExchange();
    //     getForexExchange();
    //     getCryptoExchange();
    // },[]);

    // console.log('stocks', stockExchange);
    // console.log('forex', forexExchange);
    // console.log('cryptos', cryptoExchange);
    const datas = JSON.parse(data);
    console.log('data', datas);

    return <Frame>
        <Row>
            <LayoutByThree>
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
            </LayoutByThree>
            <LayoutByThree>
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
            </LayoutByThree>
            <LayoutByThree>
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
            </LayoutByThree>
        </Row>
        <HeadingOne>Stock Market</HeadingOne>
            <MarketContainer>
                {/* {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })} */}
            </MarketContainer>
        <HeadingOne>Cryptocurrency Market</HeadingOne>
            <MarketContainer>
                {/* {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })} */}
            </MarketContainer>
        <HeadingOne>Forex Market</HeadingOne>
            <MarketContainer>
                {/* {error && 'error!'}
                {loading && 'loading'}
                {filtered.map((ticker,i) => {
                    return <StockTicker key={i} {...ticker} />
                })} */}
            </MarketContainer>
    </Frame>
}

export default StockTickerList;