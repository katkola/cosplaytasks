import React, { useState } from 'react';
import {
    Button,
    FormControl,
    InputFormControl,
    InputLabel,
    OutlinedInput
} from '@mui/material';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text" />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password" />
                </FormControl>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}