import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Card,
    AppBar,
    Toolbar,
    Box,
    Button,
    TableFooter
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate, useParams } from "react-router-dom";
import TasksByCosplay from "./TasksByCosplay";
import NewTask from "./NewTask";
import TopBarNav from './TopBarNav';

const ViewCosplay = props => {
    const { id } = useParams();
    const [cosplay, setCosplay] = useState([]);
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8000/api/cosplays/" + id)
            .then((res) => {
                setCosplay(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const createTask = taskParameters => {
        axios.post('http://localhost:8000/api/tasks', taskParameters)
            .then(res => {
                console.log(res);
                navigate(0);
            })
    }

    return (<div id="projectview">
        <TopBarNav />
        <h3>Name: {cosplay.name}</h3>
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ flex: '1' }}>
                {
                    showButton
                        ? <Button onClick={() => setShowButton(false)}>Add New Task<AddCircleOutlineIcon /></Button>
                        : <NewTask cosplayName={cosplay.name} cosplayId={id} parentName={""} parentId={0} onSubmitProp={createTask} />
                }
                <TasksByCosplay cosplayId={id} />
            </Box>
            <Box sx={{ mx: 0.5, flex: '1' }}>
            {/* Want to add Multer or Other File Upload */}
            </Box>
        </Box>
        <TableFooter>
            <a href="https://storyset.com/people">People illustrations by Storyset</a>
        </TableFooter>

    </div>)
}
export default ViewCosplay;