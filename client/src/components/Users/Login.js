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

//const salt = bcrypt.genSaltSync(10);
//console.log(salt)

async function loginUser(credentials) {
    return fetch('http://localhost:8000/login', {
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
    const [hashedPassword, setHashedPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        //setHashedPassword(bcrypt.hashSync(password, salt));
        //console.log(hashedPassword);
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
                    <OutlinedInput value={username} onChange={(e) => setUserName(e.target.value)} type="text" />
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </FormControl>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}