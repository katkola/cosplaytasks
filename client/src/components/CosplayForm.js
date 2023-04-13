import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
    Button
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const CosplayForm = (props) => {
    const {initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }

    return (
        <Paper>
        <form onSubmit={onSubmitHandler}>
            <FormControl>
                <InputLabel>Cosplay Name:</InputLabel>
                <OutlinedInput type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            </FormControl>
            <Button type="submit">Submit</Button>
        </form>
        </Paper>)
}
export default CosplayForm;