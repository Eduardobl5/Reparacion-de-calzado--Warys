import React from 'react'
import { useNavigate } from 'react-router-dom'

function Slider({open}) {
    const navigate = useNavigate()
  return (
    <aside
      className={`
        bg-linear-65 from-gray-800 to-gray-400 text-white
        transition-all duration-300
        min-h-screen
        ${open ? 'w-56' : 'w-0'}
        overflow-hidden
      `}
    >
      <nav className="flex flex-col mt-10">
        <button
          onClick={() => navigate('/')}
          className="p-4 text-left cursor-pointer hover:bg-blue-800 transition "
          
        >
          Inicio
        </button>

        <button
          onClick={() => navigate('/about')}
          className="p-4 text-left cursor-pointer hover:bg-blue-800 transition"
        >
          Quiénes somos
        </button>

        <button
          onClick={() => navigate('/services')}
          className="p-4 text-left cursor-pointer hover:bg-blue-800 transition"
        >
          Servicios
        </button>

        <button
          onClick={() => navigate('/contact')}
          className="p-4 text-left cursor-pointer hover:bg-blue-800 transition"
        >
          Contacto
        </button>
      </nav>
    </aside>
  )
}

export default Slider