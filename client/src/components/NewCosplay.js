import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import CosplayForm from './CosplayForm';
import { Card } from '@mui/material';

const NewCosplay = (props) => {
    const navigate = useNavigate();

    const createCosplay = cosplayParameters => {

        axios.post('http://localhost:8000/cosplays', cosplayParameters)
            .then(res => {
                console.log(res);
                navigate(0);
            })
            .catch(err => console.log(err.response.data.errors))
    }

    return (<Card>
        <h4>New Cosplay:</h4>
        <CosplayForm onSubmitProp={createCosplay} initialName={""} />
    </Card >)
}
export default NewCosplay;