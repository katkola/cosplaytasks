import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "../src/components/Main";
import ViewCosplay from './components/ViewCosplay';

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<ViewCosplay/>} path="cosplays/view/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
