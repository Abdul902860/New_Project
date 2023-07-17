import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Toaster} from "react-hot-toast"
function App() {
  return (

    <BrowserRouter> 
    <Toaster />
      <Routes>
       
          <Route path="/" element={<Login />} /> 
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


