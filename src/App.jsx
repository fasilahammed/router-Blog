import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login';
import Register from './pages/registration';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={< Home />} />
      <Route path='/login' element={< Login />} />
      <Route path='/' element={< Register />} />



    </Routes>
    
    </BrowserRouter>
  );
}

export default App
