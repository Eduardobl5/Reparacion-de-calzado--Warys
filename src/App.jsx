import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App