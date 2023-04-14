import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AllCosplays from './AllCosplays';
import NewCosplay from './NewCosplay';
import {
    Card,
    AppBar,
    Box,
    Button,
    Toolbar
} from '@mui/material';
import TopBarNav from './TopBarNav';
import Featured from './Featured';

const Main = (props) => {
    const [cosplays, setCosplays] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/cosplays")
            .then((res) => setCosplays(res.data))
            .catch((err) => console.log(err))
    }, [])

    const removeFromDom = (cosplayId) => {
        setCosplays(cosplays.filter(cosplay => cosplay._id != cosplayId));
    }

    return (<div sx={{backgroundColor:"blue"}}>
        <TopBarNav />

        <Box sx={{ p: 2, border: '1px', mx: 0.5, display: 'flex' }}>
            <Box sx={{ p: 2, border: '1px', flex:'1' }}>
                <AllCosplays cosplays={cosplays} removeFromDom={removeFromDom} />
            </Box>
            <Box sx={{ p: 2, border: '1px', mx: 0.5, flex:'1' }}>
                <NewCosplay />
                <Featured/>
            </Box>
        </Box>
    </div>)
}
export default Main;