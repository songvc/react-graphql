import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useFetch from 'use-http';
import { Tab, TabContainer } from './atoms/Tabs';
import { getDataFromTree } from 'react-apollo';
const LOGURL = "";

const BASEURL = "https://finnhub.io/api/v1";
const TOKEN = "bpvblknrh5rf9gg9so5g"; 

const Container = styled.div`
    width: 960px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;

const LayoutOneByFour = styled.div`
    width: 72%;
    ${props => props.border && css`
        border-top: 2px solid black;
        padding: 10px;
    `}
`; 
const LayoutThreeByFour = styled.div`
    width: 25%;
    ${props => props.border && css`
        border-top: 2px solid black;
        padding: 10px;
    `}
`; 



const CompanyDetails = (props) => {
    const [profileData, setProfileData] = useState([]);
    const [recData, setRecData] = useState([]);
    const [priceTargetData, setPriceTargetData] = useState([]);
    const [ratingData, setRatingData] = useState([]);
    const [optionData, setOptionData] = useState([]);
    const [peerData, setPeerData] = useState([]);
    const [revenueData, setRevenueData] = useState([]);
    const [earningData, setEarningData] = useState([]);
    const [metricData, setMetricData] = useState([]);
    const [investorData, setInvestorData] = useState([]);
    const [ownershipData, setOwnershipData] = useState([]);
    const [ftData, setFTData] = useState([]);
    const [quoteData, setQuoteData] = useState([]);
    const [candleData, setCandleData] = useState([]);
    const [dividendData, setDividendData] = useState([]);
    const [splitData, setSplitData] = useState([]);

    const [request, response] = useFetch(BASEURL);

    console.log('props', props);
    const { location } = props;
    const { pathname } = location;
    const options = {
        data: []
    }
    const url = pathname.split('/')[2]; 
    

    const getProfile = async () => {
        const profile = await request.get(`/stock/profile?symbol=${url}&token=${TOKEN}`);
        console.log('profile', profile);
        setProfileData(profile);
    }

    const getRec = async () => {
        const rec = await request.get(`/stock/recommendation?symbol=${url}&token=${TOKEN}`);
        console.log('rec', profile);
        setRecData(rec);
    }
 
    const getPriceTarget = async () => {
        const priceTarget = await request.get(`/stock/price-target?symbol=${url}&token=${TOKEN}`);
        console.log('pricetarget', priceTarget);
        setPriceTargetData(priceTarget);
    }

    const getRating = async () => {
        const rating = await request.get(`/stock/upgrade-downgrade?symbol=${url}&token=${TOKEN}`);
        console.log('rating', rating);
        setRatingData(rating);
    }

    const getOption = async () => {
        const option = await request.get(`/stock/option-chain?symbol=${url}&token=${TOKEN}`);
        console.log('option', option);
        setOptionData(option);
    }

    const getPeer = async () => {
        const peers = await request.get(`/stock/peers?symbol=${url}&token=${TOKEN}`);
        console.log('peer', peers);
        setPeerData(peers);
    }

    const getRevenue = async () => {
        const revenue = await request.get(`/stock/revenue-estimate?symbol=${url}&token=${TOKEN}`);
        console.log('revenue', revenue);
        setRevenueData(revenue);
    }

    const getEarning = async () => {
        const earning = await request.get(`/stock/eps-estimate?symbol=${url}&token=${TOKEN}`);
        console.log('earning', earning);
        setEarningData(earning);
    }

    const getMetrics = async () => {
        // more metrics
        const metrics = await request.get(`/stock/metric?symbol=${url}&token=${TOKEN}&metric=price`);
        console.log('metrics', metrics);
        setMetricData(metrics);
    }

    const getInvestors = async () => {
        // more metrics
        const investors = await request.get(`/stock/investor-ownership?symbol=${url}&token=${TOKEN}`);
        console.log('investor', investors);
        setInvestorData(investors);
    }

    const getOwnership = async () => {
        // more metrics
        const ownership = await request.get(`/stock/fund-ownership?symbol=${url}&token=${TOKEN}`);
        console.log('ownership', ownership);
        setOwnershipData(ownership);
    }

    const getFT = async () => {
        // more metrics
        const ft = await request.get(`/stock/financials?symbol=${url}&token=${TOKEN}&statement=bs&freq=annual`);
        console.log('ft', ft);
        setFTData(ft);
    }

    const getQuote = async () => {
        // more metrics
        const quote = await request.get(`/quote?symbol=${url}&token=${TOKEN}`);
        console.log('quote', quote);
        setQuoteData(quote);
    }

    const getCandle = async () => {
        // more metrics
        const candle = await request.get(`/stock/candle?symbol=${url}&token=${TOKEN}&resolution=1&from=1572651390&to=1572910590`);
        console.log('candle', candle);
        setCandleData(candle);
    }

    const getDividend = async () => {
        const dividend = await request.get(`/stock/dividend?symbol=${url}&token=${TOKEN}&from=2019-02-01&to=2020-02-01`);
        console.log('dividend', dividend);
        setDividendData(dividend);
    }

    const getSplit = async () => {
        const splits = await request.get(`/stock/split?symbol=${url}&token=${TOKEN}&from=2019-02-01&to=2020-02-01`);
        console.log('split', splits);
        setSplitData(splits);
    }

    useEffect(() => {
        getProfile();
        getRec();
        getPriceTarget();
        getRating();
        getOption();
        getPeer();
        getRevenue();
        getEarning();
        getMetrics();
        getInvestors();
        getOwnership();
        getFT();
        getQuote();
        getCandle();
        getDividend();
        getSplit();
    }, [url]);

    // console.log('profileData', profileData);

    return <Container>
        <Row>
            <LayoutOneByFour>
                <div>{profileData && profileData.name} ({url && url})</div>
            </LayoutOneByFour>
            <LayoutThreeByFour>
                <div>General Information</div>
            </LayoutThreeByFour>
        </Row>
        <Row>
            <LayoutOneByFour border>
                <div>{profileData && profileData.description}</div>
                <div>{profileData && profileData.currency} ${profileData && profileData.marketCapitalization}</div>
                <div>{profileData && profileData.currency} ${profileData && profileData.shareOutstanding}</div>
            </LayoutOneByFour>
            <LayoutThreeByFour border>
                <div>{profileData && profileData.address}</div>
                <div>{profileData && profileData.city}, {profileData && profileData.state}</div>
                <div>{profileData && profileData.country}</div>
                <div>{profileData && profileData.phone}</div>
                <div>{profileData && profileData.cusip}</div>
                <div>{profileData && profileData.gsector}</div>
                <div>{profileData && profileData.gsubind}</div>
                <div>{profileData && profileData.isin}</div>
            </LayoutThreeByFour>
        </Row>
        <TabContainer>
            <Tab title={'Overview'}>

            </Tab>
            <Tab title={'Profile'}>

            </Tab>
            <Tab title={'Charts'}>

            </Tab>
            <Tab title={'Financials'}>

            </Tab>
            <Tab title={'Historical Quotes'}>

            </Tab>
            <Tab title={'Analyst Estimates'}>

            </Tab>
            <Tab title={'Options'}>

            </Tab>
            <Tab title={'SEC Filing'}>

            </Tab>
            <Tab title={'Insider'}>

            </Tab>
        </TabContainer>

    </Container>
}

export default CompanyDetails;