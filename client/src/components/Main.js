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

    return (<div sx={{backgroundColor:"blue", margin:'auto'}}>
        <TopBarNav />

        <Box sx={{p: 2, border: '1px', display: 'flex', alignContent:'space-between' }}>
            <Box sx={{ p: 2, border: '1px', flex:'1' }}>
                <AllCosplays cosplays={cosplays} removeFromDom={removeFromDom} />
            </Box>
            <Box sx={{ p: 2, border: '1px', flex:'1'}}>
                <NewCosplay style={{margin:"5px"}}/>
                <Featured/>
            </Box>
        </Box>
    </div>)
}
export default Main;