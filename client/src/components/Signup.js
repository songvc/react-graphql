import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';


const Container = styled.div`
    margin : 15px;
`;


const mutation = gql`
    mutation($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            id 
        }
    }
`;


const Signup = () => {
    const [ name, setName ] = useState('');
    const [ pw, setPw ] = useState('');
    const [ createUser ] = useMutation(mutation);

    const handleName = (e) => {
        setName(e.target.value);    
    }

    const handlePW = (e) => {
        setPw(e.target.value); 
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SIGNUP submitting name', name);
        console.log('SIGNUP submitting pw', pw);
        const result = await createUser({ 
            variables: { 
                email: name, 
                password: pw 
            }
        })
        console.log('result', result);
    }

    return <Container>
        <div>Sign Up</div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type='text' value={name} onChange={handleName}/> 
            <label>pw</label>
            <input type='text' value={pw} onChange={handlePW}/> 
            <label>pwcheck</label>
            <input type='text' value={pw} onChange={handlePW}/> 
            <button>sign up</button>
        </form>    
    </Container>
}

export default Signup;