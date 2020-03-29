import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CompanyDetails from '../CompanyDetails';
import { HeadingOne } from '../Headings';

const Frame = styled.div`
    height: 100%;
    margin: 15px;
`;

const CompanyDetailsList = (props) => {
    return <Frame> 
        <Route route={`/company/:companyId`} component={CompanyDetails} />
    </Frame>
}

export default CompanyDetailsList;