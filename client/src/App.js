import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// routers
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";  

// components
import AccountDetails from './components/AccountDetails';
import Signup from './components/page/Signup';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import MainBoard from './components/page/StockTickerList';
import CompanyDetailsList from './components/page/CompanyDetailsList';
import CompanyDetails from './components/CompanyDetails';

// initial query
import graphql from './graphql';
import { useDispatch } from 'react-redux';
import { setSession } from './store/sessionStore/session';
import StockTickerList from './components/page/StockTickerList';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.div`    
  display: flex;
  flex: 1;
`;

const Left = styled.div`
  display: flex;
  flex-basis: 10%;
  flex-direction: column;
  flex-grow: 1;
  order: -1;
`

const Right = styled.div`
  display: flex;
  flex-basis: 90%;
  flex-direction: column;
  flex-grow: 1;
`;

const query = gql`
    {
        userSession(me: true) {
            id 
            user {
                email
                id
            }
        }
    }
`;

const App = () => {
    const [initialized, setInitialized ] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        graphql.query({ query }).then(({ data }) => {
            console.log('ROOT data', data);
            if (data.userSession) {
                dispatch(setSession(data.userSession));
            }
            setInitialized(true);
        })
    }, []);


    return <Container>
            <Router>
                <Header />
                <Main>
                    <Left>
                        <SideMenu />                    
                    </Left>
                    <Right>
                        <Switch>
                            <Route path ={"/signup"}>
                                <Signup />
                            </Route>
                            <Route path ={"/login"}>
                                <AccountDetails />
                            </Route>
                            <Route path ={"/home"}>
                                <StockTickerList />
                            </Route>
                            <Route path ={`/company`}>
                                <CompanyDetailsList />
                            </Route>
                            <Route path ={`/company/:companyId`}>
                                <CompanyDetails />
                            </Route>

                        </Switch>
                    </Right>
                </Main>
        </Router>
    </Container>
}

export default App;