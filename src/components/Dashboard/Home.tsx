import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
import Navbar from "../navbar/Navbar";
function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
    </div>
  );
}

export default Home;
