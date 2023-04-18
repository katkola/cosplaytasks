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

    useEffect(() => {
        axios.get("http://localhost:8000/tasks/cosplay/" + cosplayId)
            .then((res) => {
                setTasks(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [])

    const removeFromDom = (taskId) => {
        setTasks(tasks.filter(task => task._id != taskId));
    }

    const displayChildren = (children = tasks) => {
        let displayList = ``;
        let childList = [];
        displayList = children.map((task, index) => {
            // displayList += `${task.name}`
            childList = findChildren(task._id);
            if (childList.length !== 0) {
                return (
                    <>
                        <ViewTask task={task} removeFromDom={removeFromDom} />
                        <ul>{displayChildren(childList)}</ul>
                    </>)
            }
            return (
                <ViewTask task={task} removeFromDom={removeFromDom} />
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
                //console.log(task.name);
                childList.push(task);
            }
        })
        return childList;
    }

    return (<div>
        <>
            {loaded &&
                displayChildren(tasks.filter(task => task.parentId == 0))
            }
        </>

    </div>)
}
export default AllTasks;