import React from 'react'
import { Grid, TextField,Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className='link' onClick={()=>navigate("/")}>
      <h1>Dashboard</h1>
      
      <div>
        <Card className='d-flex justify-content-center align-items-center m-3 p-4 '>
          
           <h1  onClick={()=>navigate("/")}> FANTASY LOTO
           
           </h1>
           <input type='text' placeholder='Search user..' />
        </Card>
      </div>
      <div>
        <Card >
          <h5>Dashboard Vartical</h5>
        </Card>
      </div>
      

    
    </div>
  )
}

export default Dashboard