import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import { checkDocument } from 'apollo-utilities';
import { faShekelSign } from '@fortawesome/free-solid-svg-icons';

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
    border: 1px solid black;
    border-radius: 5px;
`;

const Label = styled.label`
    display: block;
`;  

// const Input = styled.input`
//     margin: 10px 0px;
//     width: 200px;
//     height: 30px;
//     display: block;
//     :focus {
//         outline: none;
//     }
// `;

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
    const [ pwcheck, setPwcheck ] = useState('');
    const [ disabled, setDisabled] = useState(true);
    const [ createUser ] = useMutation(mutation);

    const emailValidation = () => {
        return true;
    }

    const pwValidation = () => {
        if (pwcheck.length > 0 && pw.length > 0 && pwcheck === pw) {
            return true;
        } else {
            return false;
        }
    }

    const checkValidation = () => {
        console.log('checking validation');
        if (emailValidation() && pwValidation()) {
            setDisabled(false);
        }
    }

    const handleName = (e) => {
        console.log('fe');
        console.log('e', e.target.value);
        checkValidation();
        setName(e.target.value);    
    }

    const handlePW = (e) => {
        console.log('fe');
        checkValidation();
        setPw(e.target.value); 
    } 

    const handlePWCheck = (e) => {
        console.log('fe');
        checkValidation();
        setPwcheck(e.target.value); 
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SIGNUP submitting name', name);
        console.log('SIGNUP submitting pw', pw);
        try {
            const result = await createUser({ 
                variables: { 
                    email: name, 
                    password: pw 
                }
            })
        } catch(error) {
            console.log('error', error);
        }
        console.log('result', result);
    }

    const handleCancel = () => {
        setName('');
        setPw('');
        setPwcheck('');
    }

    return <Frame>
        <Container>
            <div>Sign Up</div>
            <form onSubmit={handleSubmit}>
                <Label>Email</Label>
                <Input type='text' value={name} onChange={handleName}/> 
                <Label>New Password</Label>
                <Input type='text' value={pw} onChange={handlePW}/> 
                <Label>New Password Check</Label>
                <Input type='text' value={pwcheck} onChange={handlePWCheck}/> 
                <Button disabled={disabled}>Sign Up</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </form>    
        </Container>
    </Frame>
}

export default Signup;