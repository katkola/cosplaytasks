import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/components/Main";
import ViewCosplay from './components/ViewCosplay';
import AllTasks from './components/AllTasks';
import Login from './components/Users/Login';

function App() {
  const [token, setToken] = useState();

  if(!token){
    <Login setToken={setToken}/>
  }
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<Login/>} path="/dashboard"/>
          <Route element={<AllTasks/>} path="/test/tasks" />
          <Route element={<ViewCosplay/>} path="cosplays/view/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
