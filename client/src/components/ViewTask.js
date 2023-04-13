import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NewTask from "./NewTask"
import {
    ListItem,
    ListItemText,
    IconButton,
    Button
} from '@mui/material';
import TaskDelete from './TaskDelete';

const ViewTask = props => {
    const { task, successCallback } = props
    const navigate = useNavigate();

    const deleteTask = e => {

    }

    const createTask = taskParameters => {
        axios.post('http://localhost:8000/tasks', taskParameters)
            .then(res => {
                console.log(res);
                navigate(0);
            })
            .catch(err => console.log(err.response.data.errors))
    }

    return (
        <>
            <ListItem>
                <ListItemText primary={task.name} />
                <IconButton>              
                    <TaskDelete taskId={task._id} successCallback={() => deleteTask(task._id)} />
                </IconButton>
                <NewTask cosplayName={task.cosplayName} cosplayId={task.cosplayId} parentName={task.name} parentId={task._id} onSubmitProp={createTask} />
            </ListItem>
        </>)
}
export default ViewTask;