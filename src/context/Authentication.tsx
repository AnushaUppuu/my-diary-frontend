import React, { Children, useState } from "react";
import { createContext } from "react";
type Credentials={
    token:string;
    setToken:React.Dispatch<React.SetStateAction<string>>;
    username:string,
    setUsername:React.Dispatch<React.SetStateAction<string>>;
}
export const Authentication=createContext<Credentials>({} as Credentials)
export const AuthenticationProvider=({children}:any)=>{
    const [token,setToken]=useState('');
    const [username,setUsername]=useState('');
    return (
        <Authentication.Provider value={{username,setUsername,token,setToken}}>
            {children}
        </Authentication.Provider>
    )
}