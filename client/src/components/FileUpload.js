import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from '../api/functions';

const FileUpload = props => {
  const [item, setItem] = useState({ title: '', image: '' });
  const [items, setItems] = useState([])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);
    setItems([...items, result]);
  }

  useEffect(() => {
    
    axios.get('http://localhost:8000/items')
    .then((res)=>{
      console.log(res);
      setItems(res);
    })
    .catch(err=>console.log(err))
    // const fetchData = async () => {
    //   const result = await getItems();
    //   console.log('fetch data;m', result)
    //   setItems(result)
    // }
    // fetchData()
  }, [])

  return (
    <>
      <h2>Testing File Upload</h2>
      {/* <FileBase64 multiple={ true } onDone={()=> setPictos(this) }/> */}
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          <InputLabel>Name:</InputLabel>
          <OutlinedInput type="text" onChange={e => setItem({ ...item, title: e.target.value })} />
          <FileBase64 onDone={({ base64 }) => setItem({ ...item, image: base64 })} />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
      {items?.map(item => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
            {/* <img className="activator" style={{ width: '100%', height: 300 }} src={item.image} /> */}
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{item.title}</span>
          </div>
        </div>
      ))}
    </>
  )
}
export default FileUpload;