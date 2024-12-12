import React from 'react'

function Register() {
  return (
    <div>
        <h1>Register</h1>
        <input data-testid='username'  placeholder='Enter Username'/>
        <input data-testid='password' placeholder='Enter password'/>
        <input data-testid='confirm-password' placeholder='Confirm the Password'/>
        <input data-testid='gender' placeholder='Enter Gender'/>
        <input data-testid='profile-picture' placeholder='Select the profile picture' type='file'/>
        <input data-testid='email-address' placeholder='Enter Email Address'/>
    </div>

  )
}

export default Register