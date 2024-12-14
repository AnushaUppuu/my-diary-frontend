import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
function Register() {
  const nav=useNavigate();
  return (
    <div className='container' >
        <h1>Register</h1>
        <input id="outlined-basic" data-testid="username" placeholder="Enter Username" className='input' />
        <input id="outlined-basic" data-testid="password" placeholder="Enter Password"  className='input' />
        <input id="outlined-basic" data-testid="confirm-password" placeholder="Confirm The Password" className='input'  />
        <input id="outlined-basic" data-testid="gender" placeholder="Enter Gender" className='input' />
        <input id="outlined-basic" data-testid="email-address" placeholder="Enter Email Address" className='input'  />
        <input id="outlined-basic" data-testid="profile-picture" type='file'/>
        <button className="contained">Register</button>
       <span>Already have an account ? <button className='textButton' onClick={()=>nav('login')}>Login</button></span>
    </div>
  )
}

export default Register