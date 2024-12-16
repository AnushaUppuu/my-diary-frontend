import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Authentication } from "../../context/Authentication";
import { Diary } from "../../types/Diary";
import SingleDiary from "../diary/SingleDiary";
function Dashboard() {
  const { token,username } = useContext(Authentication);
  const navigate = useNavigate();
  return (
    <div className="homeContainer">
      {!token && (
        <div className="notLogin">
          <h1>Please Login or Register to access myDiary</h1>
          <button className="goToMain" onClick={() => navigate("/")}>
            Go to main
          </button>
        </div>
      )}
      {token && (
        <div>
          <Navbar />
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
