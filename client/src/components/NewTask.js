import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Paper,
    Button,
    Select,
    MenuItem
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NewTask = props => {
    const {cosplayId, parentId, cosplayName, parentName, onSubmitProp } = props;
    const [name, setName] = useState("");
    const[loaded, setLoaded] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, parentId, parentName, cosplayId, cosplayName });
        
    }

    return (<>
        <form onSubmit={onSubmitHandler}>
            <FormControl>
                <InputLabel>New Task:</InputLabel>
                <OutlinedInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <Button type="submit">Submit</Button>
        </form>
    </>)
}
export default NewTask;