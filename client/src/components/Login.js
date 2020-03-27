import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const Container = styled.div`
    margin : 15px;
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

        const result = await createUserSession({ 
            variables: { 
                email: name, 
                password: pw }
        })
        console.log('re', result);
    }


    return <Container>
        <div>Login</div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type='text' value={name} onChange={handleNameChange} />
            <label>pw</label>
            <input type='password' value={pw} onChange={handlePWChange} />
            <button>submit</button> 
        </form>
    </Container>
}

export default Login;