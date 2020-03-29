import React from 'react';
import { useSelector } from 'react-redux';
import Login from './page/Login';
import Account from './Account';

const AccountDetails = () => {
    const session = useSelector(state => state.session);
    console.log('session', session);
    
    if (session) return <Account />
    return <Login />
}

export default AccountDetails;