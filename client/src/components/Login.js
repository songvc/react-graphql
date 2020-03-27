import React, { useState } from 'react';

const Login = () => {
    const [ name, setName ] = useState('');
    const [ pw, setPW ] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePWChange = (e) => {
        setPW(e.target.value);
    }
    const handleSubmit = () => {
        console.log('f', name);
        console.log('pw', pw);
    }


    return <div>
        <form onSubmit={handleSubmit}>
            <label>name</label>
            <input type='text' value={name} onChange={handleNameChange} />
            <label>pw</label>
            <input type='password' value={pw} onChange={handlePWChange} /> 
        </form>
    </div>
}

export default Login;