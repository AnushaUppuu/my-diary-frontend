import React from 'react';
import Register from './components/Register';
import { Routes,Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';
import './App.css'
function App() {
  return (
    <div className='mainContainer'>
      <h1>Welcome to the MyDiary</h1>
    <Routes>
    <Route index path='/'  element={ <Register/> } />
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
 
  );
}

export default App;
