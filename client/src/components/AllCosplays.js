import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import {
    Card,
    CardContent,
    Button,
    ButtonGroup,
    ListItem,
    ListItemText,
    Box,
    TableHead,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Typography
} from '@mui/material';
import DeleteButton from './DeleteButton';

const AllCosplays = (props) => {
    const { removeFromDom, cosplays } = props;

    const removeFromList = (cosplayId) => {
        removeFromDom(cosplayId);
    }



    return (<Card sx={{ minWidth: 400, backgroundColor:"lavender" }}>
        <h4>Current Cosplay Projects</h4>
        <Table sx={{ minWidth: 400}} aria-label="simple table">
            <TableRow sx={{ display:"flex", borderBottom:"1px solid lightgrey", justifyContent:"space-between"}}>
                <Typography>Name</Typography>
                <Typography>Actions</Typography>
            </TableRow>
        
        {
            cosplays.map((cosplay, index) => {
                return (
                    <TableRow key="index" sx={{ display:"flex", justifyContent:"space-between", margin:"3px"}}>
                        <Typography>{cosplay.name}</Typography>
                        <td>
                        <ButtonGroup>
                            {/* <Button><Link to={`/cosplays/edit/${cosplay._id}`}>Edit</Link></Button> */}
                            <Button><Link to={`/cosplays/view/${cosplay._id}`}>View</Link></Button>
                            <DeleteButton cosplayId={cosplay._id} successCallback={() => removeFromList(cosplay._id)} />
                        </ButtonGroup></td>
                    </TableRow>)
            })
        }
        </Table>
    </Card>)
}
export default AllCosplays;