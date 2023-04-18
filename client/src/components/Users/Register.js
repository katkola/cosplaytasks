import React, { useState } from 'react';
import {
    Button,
    FormControl,
    InputFormControl,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import PropTypes from 'prop-types';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

async function registerUser(credentials) {
    return fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Register({setToken}){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [hashedPassword, setHashedPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        const token = await registerUser({
            username,
            password
        });
        setToken(token);
    }


    return (
        <>
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput value={username} onChange={(e) => setUserName(e.target.value)} type="text" />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </FormControl>

                <Button type="submit">Submit</Button>
            </form>
        </>
    );
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
}