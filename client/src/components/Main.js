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
    Toolbar,
    TableFooter
} from '@mui/material';
import TopBarNav from './TopBarNav';
import Featured from './Featured';

const Main = (props) => {
    const [cosplays, setCosplays] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/cosplays")
            .then((res) => setCosplays(res.data))
            .catch((err) => console.log(err))
    }, [])

    const removeFromDom = (cosplayId) => {
        setCosplays(cosplays.filter(cosplay => cosplay._id != cosplayId));
    }

    return (<div id="maincomp" sx={{backgroundColor:"blue"}}>
        <TopBarNav />

        <Box sx={{p: 2, border: '1px', display: 'flex', alignContent:'space-between' }}>
            <Box sx={{ p: 2, border: '1px', flex:'1' }}>
                <NewCosplay />
                <AllCosplays cosplays={cosplays} removeFromDom={removeFromDom} />
            </Box>
            <Box sx={{ p: 2, border: '1px', mx: 0.5, flex:'1' }}>
                <Featured/>
            </Box>
        </Box>
        <TableFooter><a href="https://storyset.com/people">People illustrations by Storyset</a></TableFooter>
    </div>)
}
export default Main;