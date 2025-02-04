import React from "react";
import Register from "./components/register/Register";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import { AuthenticationProvider } from "./context/Authentication";
import Create from "./components/diary/Create";
import Home from "./components/Dashboard/Home";
function App() {
  return (
    <div className="mainContainer">
      <AuthenticationProvider>
        <Routes>
          <Route index path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Dashboard/>}>
            <Route path="/home/" element={<Home/>}/>
            <Route path="/home/create" element={<Create />} />
          </Route>
        </Routes>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
