import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    AppBar,
    Toolbar,
    CardContent
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import TaskDelete from './TaskDelete';
import TopBarNav from './TopBarNav';

const AllTasks = props => {
    const { cosplayId } = props;
    const [tasks, setTasks] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/tasks/")
            .then((res) => {
                setTasks(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err))
    }, [])

    const removeFromList = (taskId) => {
        setTasks(tasks.filter(task => task._id != taskId));
    }

    return (<>
        <TopBarNav/>
        <Card><h2>All Tasks</h2></Card>
        {
            loaded && tasks.map((task, index) => {
                return (
                    <Card variant='outlined' key={index}>
                        <CardContent>Name: {task.name}</CardContent>
                        {/* <Button><Link to={`/tasks/edit/${task._id}`}>Edit</Link></Button> */}
                        <Link to={`/tasks/view/${task._id}`}>View</Link>
                        <TaskDelete taskId={task._id} successCallback={() => removeFromList(task._id)} />
                    </Card>)
            })
        }
    </>)

}
export default AllTasks;