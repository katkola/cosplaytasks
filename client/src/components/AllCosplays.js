import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import {
    Card,
    CardContent,
    Button
} from '@mui/material';
import DeleteButton from './DeleteButton';

const AllCosplays = (props) => {
    const { removeFromDom, cosplays } = props;

    const removeFromList = (cosplayId) => {
        removeFromDom(cosplayId);
    }

    

    return (<div>
        <h4>Current Projects</h4>
        {
        cosplays.map((cosplay, index) => {
            return (<Card variant='outlined' key={index}>
                <CardContent>Name: {cosplay.name}</CardContent>
                {/* <Button><Link to={`/cosplays/edit/${cosplay._id}`}>Edit</Link></Button> */}
                <Link to={`/cosplays/view/${cosplay._id}`}>View</Link>
                <DeleteButton cosplayId={cosplay._id} successCallback={()=> removeFromList(cosplay._id)}/>
            </Card>)
        })
        }
    </div>)
}
export default AllCosplays;