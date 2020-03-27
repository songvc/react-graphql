import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUserSession(email: $email, password: $password) {
            id 
            user {
                email
                id
            }
        }
    }
`;
const Login = () => {
    const [ name, setName ] = useState('');
    const [ pw, setPW ] = useState('');
    const [ createUserSession ] = useMutation(mutation);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePWChange = (e) => {
        setPW(e.target.value);
    }
    const handleSubmit = async () => {
        console.log('f', name);
        console.log('pw', pw);
        const result = await createUserSession({ 
            variables: { 
                email: name, 
                password: pw }
        })
        console.log('re', result);
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type='text' value={name} onChange={handleNameChange} />
            <label>pw</label>
            <input type='password' value={pw} onChange={handlePWChange} />
            <button>submit</button> 
        </form>
    </div>
}

export default Login;