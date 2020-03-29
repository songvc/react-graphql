import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

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

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 250px;
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
    const [ pwcheck, setPwcheck ] = useState('');
    const [ isNameValidated, setIsNameValidated ] = useState(false);
    const [ isPWValidated, setIsPWValidated ] = useState(false);
    const [ disabled, setDisabled] = useState(true);
    const [ createUser ] = useMutation(mutation);

    const checkValidation = () => {
        console.log('checking validation');
        console.log('pw validation result', pwValidation());

        if (emailValidation() && pwValidation()) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    const emailValidation = () => {
        if (name.length > 0) {
            setIsNameValidated(true);
            return true;
        } else {
            setIsNameValidated(false);
            return false;
        }
    }
    
    const pwValidation = () => {
        console.log('current pwcheck', pwcheck)
        console.log('current pw', pw)
        console.log('pw === pwcheck', pw === pwcheck);

        if (pwcheck.length > 0 && pw.length > 0 && pwcheck === pw) {
            setIsPWValidated(true);
            return true;
        } else {
            setIsPWValidated(false);
            return false;
        }
    }
    
    const handleName = (e) => {
        setName(e.target.value);    
    }

    const handlePW = (e) => {
        setPw(e.target.value); 
    } 

    const handlePWCheck = (e) => {
        setPwcheck(e.target.value); 
    } 

    useEffect(() => {
        checkValidation();
    }, [name, pw, pwcheck])

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
                <InputContainer>
                    <Input type='text' value={name} onChange={handleName}/> 
                    {isNameValidated? <FontAwesomeIcon color={"green"} icon={faCheckCircle} size="lg" />: <div></div>}
                </InputContainer>
                <Label>New Password</Label>
                <InputContainer>
                    <Input type='text' value={pw} onChange={handlePW}/> 
                    {isPWValidated? <FontAwesomeIcon color={"green"} icon={faCheckCircle} size="lg" />: <div></div>}
                </InputContainer>
                <Label>New Password Check</Label>
                <InputContainer>
                    <Input type='text' value={pwcheck} onChange={handlePWCheck}/> 
                    {isPWValidated? <FontAwesomeIcon color={"green"} icon={faCheckCircle} size="lg" />: <div></div>}
                </InputContainer>
                <Button disabled={disabled}>Sign Up</Button>
                <Button info onClick={handleCancel}>Cancel</Button>
            </form>    
        </Container>
    </Frame>
}

export default Signup;