import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function Login() {
    const navigate=useNavigate();
    const [token,setToken]=useState();
    const {
      register,
      handleSubmit,
      formState:{errors}
    }=useForm();
    const onSubmit = async(data:any) => {
      const result=await fetch('http://localhost:4000/users/login',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({...data})
      })
     
      if(result.ok){
        navigate('/home')
      }
      else if(result.status==300){
        alert("Wrong credentials");
      }
      else if(result.status==404){
        alert("This user not exists");
      }
      else{
        
        alert('Try Again!!');
      }
    };
  return (
    <div className='containerBox'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='container'>
      <input id="outlined-basic" data-testid="username" placeholder="Enter Username"   type='text' className='input' {...register("username")}/>
      <input id="outlined-basic" data-testid="password" placeholder="Enter Password" className='input' type='password' {...register("password")} />
        <button className='contained' >Login</button>
         <span>Don't have an account ? <button className='textButton' onClick={(event)=>{navigate('/')}}>Register</button></span>
         </form>
    </div>
  )
}

export default Login