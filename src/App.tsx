import React from 'react';
import Register from './components/Register';
import { Routes,Route, BrowserRouter, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to the MyDiary</h1>
    <Routes>
    <Route path='/' element={ <Register/> } />
    </Routes>
    </div>
 
  );
}

export default App;
