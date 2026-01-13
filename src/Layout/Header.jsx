import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          bg-linear-to-r from-orange-400 to-gray-200
          h-16
          flex items-center justify-between
          px-4 md:px-8
          shadow-md
        "
      >
        {/* Branding */}
        <div className="flex flex-col leading-tight">
          <Link to="/" className="text-lg md:text-2xl font-bold text-black hover:text-gray-200 transition">
            WARYS
          </Link>
          <p className="hidden sm:block text-xs md:text-sm text-gray-700">
            Reparación de calzado y artículos de piel
          </p>
        </div>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-white transition">Inicio</Link>
          <Link to="/about" className="hover:text-white transition">Quiénes somos</Link>
          <Link to="/services" className="hover:text-white transition">Servicios</Link>
          <Link to="/contact" className="hover:text-white transition">Contacto</Link>
        </nav>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl font-bold cursor-pointer"
        >
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/50
          transition-opacity duration-300
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
          md:hidden
        `}
        onClick={() => setOpen(false)}
      />

      {/* MENÚ LATERAL DERECHO */}
      <aside
        className={`
          fixed top-0 right-0 z-50
          h-full w-64 bg-white shadow-lg
          transform transition-transform duration-300
          ${open ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold mb-6 cursor-pointer"
          >
            ✕
          </button>

          <nav className="flex flex-col gap-4 text-lg font-semibold">
            <Link onClick={() => setOpen(false)} to="/">Inicio</Link>
            <Link onClick={() => setOpen(false)} to="/about">Quiénes somos</Link>
            <Link onClick={() => setOpen(false)} to="/services">Servicios</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contacto</Link>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Header
