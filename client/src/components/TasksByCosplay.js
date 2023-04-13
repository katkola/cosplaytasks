import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NewTask from "./NewTask"
import {
    ListItem,
    List,
    ListItemText,
    Button,
    Card
} from '@mui/material';
import TaskDelete from './TaskDelete';
import ViewTask from './ViewTask';

const AllTasks = (props) => {
    const { cosplayId } = props;
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const removeFromList = (taskId) => {
        setTasks(tasks.filter(task => task._id != taskId));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/tasks/cosplay/" + cosplayId)
            .then((res) => {
                setTasks(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [])

    const displayChildren = (children = tasks) => {
        let displayList = ``;
        let childList = [];
        displayList = children.map((task, index) => {
            // displayList += `${task.name}`
            childList = findChildren(task._id);
            if (childList.length !== 0) {
                return (
                    <>
                        <ViewTask task={task} successCallback={() => removeFromList(task._id)} />
                        <ul>{displayChildren(childList)}</ul>
                    </>)
            }
            return (
                <ViewTask task={task} successCallback={() => removeFromList(task._id)} />
            )
        })
        //console.log(`Items ${displayList}`);
        return <List> {displayList} </List>;
    }

    const findChildren = (parent) => {
        let childList = [];
        let parentId = parent;
        tasks.map((task) => {
            if (task.parentId === parentId) {
                console.log(task.name);
                childList.push(task);
            }
        })
        return childList;
    }

    return (<div>
        <h4>All Tasks</h4>
        <Card>
            {loaded &&
                // tasks.map((task, index) => {
                //     return (<Card variant='outlined' key={index}>
                //         <CardContent>Task: {task.name}  for {task.cosplayName}</CardContent>
                //         {task.parentName
                //             ? <CardContent>Parent Task: {task.parentName}</CardContent>
                //             : <></>}
                //         <CardContent><TaskDelete taskId={task._id} successCallback={() => removeFromDom(task._id)} /></CardContent>
                //     </Card>)
                // })

                displayChildren(tasks.filter(task => task.parentId == 0))
            }
        </Card>

    </div>)
}
export default AllTasks;