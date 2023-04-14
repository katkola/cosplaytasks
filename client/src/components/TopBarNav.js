import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Card,
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Typography,
    Button,
    MenuItem,
    Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBarNav = props => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"left" }}>
                    <Link style={{ textDecoration: "none", color:"White"}} to={`/`}>CosPlanIt</Link>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button sx={{ color: '#fff' }}>
                    <Link style={{ textDecoration: "none" }} to={`/`}>Home</Link>
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                    <Link style={{ textDecoration: "none" }} to={`/`}>New Link</Link>
                    </Button>
                    <Button sx={{ color: '#fff' }}>
                    <Link style={{ textDecoration: "none" }} to={`/test/tasks`}>All Tasks</Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>

    )
}
export default TopBarNav;