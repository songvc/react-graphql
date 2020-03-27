import React, { useState } from 'react';

const signup = () => {
    const [ name, SetName ] = useState('');
    const [ pw, setPw ] = useState('');

    const handleName = (e) => {
        SetName(e.target.value);    
    }

    const handlePW = (e) => {
        SetPw(e.target.value);           
    } 

    return <div>
        <form onSubmit={handle}>
            <input type='text' value={name} onChange={handleName}/> 
            <input type='text' value={pw} onChange={handlePW}/> 
        </form>    
    </div>
}