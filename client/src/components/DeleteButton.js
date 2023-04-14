import React from 'react'
import axios from 'axios';
import {Button} from '@mui/material';

const DeleteButton = (props) => {
    const { cosplayId, successCallback } = props;
    
    const deleteCosplay = e => {
        axios.delete('http://localhost:8000/cosplays/' + cosplayId)
            .then(res=>{
                successCallback();
            })
    }

    return (
        <Button onClick={deleteCosplay}>
            Delete
        </Button>
    )
}
export default DeleteButton;
