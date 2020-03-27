import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSession } from './store/session';
import Login from './components/Login';
import Header from './components/Header';
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
    
    // useEffect(() => {
    //     graphql.query({ query }).then(({ data }) => {
    //         if (data.userSession) {
    //             dispatch(setSession(data.userSession));
    //         }
    //         setInitialized(true);
    //     })
    // }, []);

    // if (!initialized) return 'loading...';

    return <div>
        <div> 
            <Header />
            <Login />
        </div>
    </div>
}

export default App;