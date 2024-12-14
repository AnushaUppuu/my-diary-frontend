import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
  return (
    <div className='container'>
      <input id="outlined-basic" data-testid="username" placeholder="Enter Username"   type='name' className='input'/>
      <input id="outlined-basic" data-testid="password" placeholder="Enter Password" className='input' type='password' />
        <button className='contained'>Login</button>
         <span>Don't have an account ? <button className='textButton' onClick={(event)=>{navigate('/')}}>Register</button></span>
    </div>
  )
}

export default Login