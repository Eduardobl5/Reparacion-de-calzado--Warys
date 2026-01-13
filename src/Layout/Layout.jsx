import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Slider from './Slider'
import Header from './Header'
import Footer from '../pages/Footer'

function Layout() {
  
  const location = useLocation()

  return (
    <div className="flex min-h-screen">

      {/* SLIDER */}
      <Slider/>
        
      {/* CONTENIDO */}
      <div className="flex flex-col flex-1">

        {/* HEADER */}
        <Header/>

        {/* CONTENIDO DINÁMICO */}
        <main className="flex-1 animate-fadeIn pt-16"
        key={location.pathname}
        >
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer/>
      </div>

    </div>
  )
}

export default Layout
