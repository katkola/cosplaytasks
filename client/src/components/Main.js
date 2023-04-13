import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AllCosplays from './AllCosplays';
import NewCosplay from './NewCosplay';

const Main = (props) => {
    const[cosplays, setCosplays] = useState([]);
    const[tasks, setTasks] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/cosplays")
        .then((res)=> setCosplays(res.data))
        .catch((err)=> console.log(err))
    }, [] )

    const removeFromDom = (cosplayId) => {
        setCosplays(cosplays.filter(cosplay=> cosplay._id != cosplayId));
    }

    return (<div>
        Welcome, meow meow!!
        <NewCosplay/>
        <AllCosplays cosplays={cosplays} removeFromDom={removeFromDom}/>
    </div>)
}
export default Main;