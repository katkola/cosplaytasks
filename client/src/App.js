import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Main from "./components/Main";
import ViewCosplay from './components/Tasks/ViewCosplay';
import AllTasks from './components/Tasks/AllTasks';
import Login from './components/Users/Login';
import useToken from './components/App/useToken';


function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<Login setToken={setToken}/>} path="/dashboard"/>
          <Route element={<AllTasks/>} path="/test/tasks" />
          <Route element={<ViewCosplay/>} path="cosplays/view/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
