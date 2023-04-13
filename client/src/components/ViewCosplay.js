import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import TasksByCosplay from "./TasksByCosplay";
import NewTask from "./NewTask";

const ViewCosplay = props => {
    const{id} = useParams();
    const[cosplay, setCosplay] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/cosplays/" + id)
            .then((res) => {
                setCosplay(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const createTask = taskParameters => {
        axios.post('http://localhost:8000/tasks', taskParameters)
            .then(res => {
                console.log(res);
                navigate(0);
            })
            .catch(err => console.log(err.response.data.errors))
    }

    return(<>
        View Cosplay
        <h3>Name: {cosplay.name}</h3>
        <NewTask cosplayName={cosplay.name} cosplayId={id} parentName={""} parentId={0} onSubmitProp={createTask}/>
        <TasksByCosplay cosplayId={id}/>
        

    </>)
}
export default ViewCosplay;