import React from 'react'
import axios from 'axios';
import {Button} from '@mui/material';

const TaskDelete = (props) => {
    const { taskId, successCallback } = props;
    
    const deletetask = e => {
        axios.delete('http://localhost:8000/api/tasks/' + taskId)
            .then(res=>{
                successCallback();
            })
    }

    return (
        <Button variant="outlined" onClick={deletetask}>
            Delete
        </Button>
    )
}
export default TaskDelete;
