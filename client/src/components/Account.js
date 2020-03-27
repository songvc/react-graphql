import React from 'react';
import { useSelector } from 'react-redux';

const AccountDetails = () => {
    const session = useSelector(state => state.session);
    return <div>
        logged in as {session.user.email} 
    </div>
}

export default AccountDetails;