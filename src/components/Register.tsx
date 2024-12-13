import { Button, TextField } from '@mui/material'
import React from 'react'
import './register.css'
// import re
function Register() {
  return (
    <div className='container' >
        <h1>Register</h1>
        <TextField id="outlined-basic" data-testid="username" label="Enter Username" variant="outlined" size={"small"} />
        <TextField id="outlined-basic" data-testid="password" label="Enter Password" variant="outlined" size={"small"} className='input' />
        <TextField id="outlined-basic" data-testid="confirm-password" label="Confirm The Password" variant="outlined" size={"small"} />
        <TextField id="outlined-basic" data-testid="gender" label="Enter Gender" variant="outlined" size={"small"} />
        <TextField id="outlined-basic" data-testid="email-address" label="Enter Email Address" variant="outlined" size={"small"} />
        <TextField id="outlined-basic" data-testid="profile-picture"  variant="standard" size={"small"}  type='file'/>
        <Button variant="contained">Register</Button>
    </div>

  )
}

export default Register