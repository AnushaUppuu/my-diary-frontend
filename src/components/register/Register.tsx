import React from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
function Register() {
  const nav=useNavigate();
  const{
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const onSubmit=async(data:any)=>{   
    if(data.password!==data.confirmPassword){
      alert("Password should be same as the confirm password");
      return;
    }
    const result=await fetch('http://localhost:4000/users/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({...data,profilePicture:data.profileImage[0]})
    })
    if(result.ok){
      alert("User registered successfully");
      nav('/home')
    }
  }
  return (
    <div className='containerBox' >
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='container'>
        <input id="outlined-basic"  data-testid="username" placeholder="Enter Username" className='input'{...register("username", {required:"Please Enter the username",minLength:4})} />
        <input id="outlined-basic" data-testid="password" placeholder="Enter Password"  className='input'{...register("password",{required:"Please Enter the password",minLength:6})}type='password' />
        <input id="outlined-basic" data-testid="confirm-password" placeholder="Confirm The Password" className='input' {...register("confirmPassword",{required:"The length should be 6",minLength:6})} type='password' />
        <select className='input' {...register("gender")}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
       </select>
        <input id="outlined-basic" data-testid="email-address" placeholder="Enter Email Address" className='input' {...register("emailAddress")} />
        <input id="outlined-basic" data-testid="profile-picture" type='file' {...register("profileImage")}/>
        <button className="contained">Register</button>
       <span>Already have an account ? <button className='textButton' onClick={()=>nav('login')}>Login</button></span>
       </form>
    </div>
  )
}

export default Register