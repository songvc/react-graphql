import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const Frame = styled.div`
    margin: 15px;
    height: 100vh;
`;

const Container = styled.div`
    margin : 15px;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 300px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
`;

const Label = styled.label`
    display: block;
`; 

const Links = styled.a`
    display: inline-block;
    color: blue;
    width: 100px;
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
        <Container>
            <div></div>
            <form onSubmit={handleSubmit}>
                <div>Welcome to E.BIT.DA</div>
                <div>Don't have an account yet? <Links href='/signup'>Sign up.</Links> </div>
                <Label>Email</Label>
                <Input type='text' value={name} onChange={handleNameChange} />
                <Label>Password</Label>
                <Input type='password' value={pw} onChange={handlePWChange} />
                <Button>Login</Button> 
                <div>Forgot your password? <Links href='/home'>Reset here.</Links> </div>
            </form>
        </Container>
    </Frame>
}

export default Login;