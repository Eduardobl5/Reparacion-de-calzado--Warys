import { Link } from "react-router-dom"

function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-orange-400 to-gray-200
        h-16
        flex items-center justify-between
        px-4 md:px-8
        shadow-md
      "
    >
      {/* Branding */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-xl md:text-2xl font-bold tracking-widest">
          WARYS
        </h1>
        <p className="hidden sm:block text-xs md:text-sm text-gray-700">
          Reparación de calzado y artículos de piel
        </p>
      </div>

      {/* Navegación */}
      <nav className="flex gap-6 items-center font-semibold">
        <Link
          to="/"
          className="text-gray-900 hover:text-white transition"
        >
          Inicio
        </Link>

        <Link
          to="/about"
          className="text-gray-900 hover:text-white transition"
        >
          Quiénes somos
        </Link>

        <Link
          to="/services"
          className="text-gray-900 hover:text-white transition"
        >
          Servicios
        </Link>

        <Link
          to="/contact"
          className="text-gray-900 hover:text-white transition"
        >
          Contacto
        </Link>
      </nav>
    </header>
  )
}

export default Header
