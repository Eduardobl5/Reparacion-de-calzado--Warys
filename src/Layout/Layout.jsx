import { Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Slider from './Slider'
import Header from './Header'
import Footer from '../pages/Footer'

function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  console.log(open);

  return (
    <div className="flex min-h-screen">

      {/* SLIDER */}
      <Slider open={open} />
        
      {/* CONTENIDO */}
      <div className="flex flex-col flex-1">

        {/* HEADER */}
        <Header>
          <button
            onClick={() => setOpen(!open)}
            className="text-white cursor-pointer bg-orange-600 px-3 py-2 rounded hover:bg-orange-800 transition"
          >
            ☰
          </button>
        </Header>

        {/* CONTENIDO DINÁMICO */}
        <main className="flex-1 animate-fadeIn"
        key={location.pathname}
        onClick={() => setOpen(false)}
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
