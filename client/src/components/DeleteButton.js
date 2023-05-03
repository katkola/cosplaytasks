import React from 'react'
import axios from 'axios';
import {Button} from '@mui/material';

const DeleteButton = (props) => {
    const { cosplayId, successCallback } = props;
    
    const deleteCosplay = e => {
        axios.delete('http://localhost:8000/api/cosplays/' + cosplayId)
            .then(res=>{
                successCallback();
            })
    }

    return (
        <Button sx={{color:"red", fontWeight:"bold", backgroundColor:'lightGrey'}} onClick={deleteCosplay}>
            Delete
        </Button>
    )
}
export default DeleteButton;
