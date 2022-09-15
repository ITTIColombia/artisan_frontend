import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Pages/Register-form/Register-form';

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/register" exact element={<RegisterForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;