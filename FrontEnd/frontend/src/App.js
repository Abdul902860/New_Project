import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import Dashboard from './Components/Dashboard';
function App() {
  return (
    <BrowserRouter> 
      <Routes>
       
          <Route path="/" element={<Login />} /> 
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


