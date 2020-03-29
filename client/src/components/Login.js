import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Input from './Input';
import Button from './Button';

const Frame = styled.div`
    margin: 15px;
    height: 100vh;
`;

const Label = styled.label`
    display: block;
`; 

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("LOGIN ", name);
        console.log("LOGIN ", pw);

        const result = await createUserSession({ 
            variables: { 
                email: name, 
                password: pw }
        })
        console.log('LOGIN result', result);
    }


    return <Frame>
        <div>Login</div>
        <div></div>
        <form onSubmit={handleSubmit}>
            <Label>Email</Label>
            <Input type='text' value={name} onChange={handleNameChange} />
            <Label>Password</Label>
            <Input type='password' value={pw} onChange={handlePWChange} />
            <Button>Submit</Button> 
        </form>
    </Frame>
}

export default Login;