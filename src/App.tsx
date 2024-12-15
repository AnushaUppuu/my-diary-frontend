import React from "react";
import Register from "./components/register/Register";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./components/login/Login";
import "./App.css";
import Home from "./components/dashboard/Home";
import { AuthenticationProvider } from "./context/Authentication";
function App() {
  return (
    <div className="mainContainer">
      <AuthenticationProvider>
      <Routes>
        <Route index path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
