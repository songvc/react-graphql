import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CompanyDetails from './CompanyDetails';

const Frame = styled.div`
    height: 100%;
    margin: 15px;
`;

const CompanyDetailsList = (props) => {
    return <Frame> 
        <div>Welcome to Company Overview</div>       
        <Route route={`/company/:companyId`} component={CompanyDetails} />
    </Frame>
}

export default CompanyDetailsList;