import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/login';
import Feed from './pages/feed';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/feed' element={<Feed/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
