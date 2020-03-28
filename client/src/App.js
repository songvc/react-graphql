import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSession } from './store/sessionStore/session';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";  
import AccountDetails from './components/AccountDetails';
import Signup from './components/Signup';
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import MainBoard from './components/MainBoard';

import graphql from './graphql';

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


    return <Router>
            <Header />
            <SideMenu></SideMenu>
            <Switch>
                <Route path ="/signup">
                    <Signup />
                </Route>
                <Route path ="/login">
                    <AccountDetails />
                </Route>
                <Route path ="/">
                    <MainBoard />
                </Route>
                <Route path ="/main">
                </Route>
            </Switch>
    </Router>
}

export default App;