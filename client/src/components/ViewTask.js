import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NewTask from "./NewTask"
import {
    ListItem,
    ListItemText,
    IconButton,
    Button,
    Card
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TaskDelete from './TaskDelete';

const ViewTask = props => {
    const { task, removeFromDom } = props
    const navigate = useNavigate();
    const [showSubButton, setShowSubButton] = useState(true);

    const deleteTask = (taskId) => {
        removeFromDom(taskId);
    }

    const createTask = taskParameters => {
        axios.post('http://localhost:8000/api/tasks', taskParameters)
            .then(res => {
                console.log(res);
                navigate(0);
            })
            .catch(err => console.log(err.response.data.errors))
    }

    return (
        <>
            <Card>
                <ListItem>
                    <ListItemText primary={task.name} />
                    <ListItemText primary={"Details"} />
                    <TaskDelete taskId={task._id} successCallback={() => deleteTask(task._id)} />
                </ListItem>
                {
                    showSubButton
                        ? <Button onClick={() => setShowSubButton(false)}>Add New Sub Task<AddCircleOutlineIcon /></Button>
                        : <NewTask cosplayName={task.cosplayName} cosplayId={task.cosplayId} parentName={task.name} parentId={task._id} onSubmitProp={createTask} />
                }
            </Card>
        </>)
}
export default ViewTask;