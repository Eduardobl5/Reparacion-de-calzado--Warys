function Header({ children }) {
  return (
    <header className="bg-linear-to-r from-orange-400 to-gray-200 h-16 flex items-center px-4 shadow-md">
      
      {/* Botón menú */}
      <div className="mr-4">
        {children}
      </div>

      {/* Branding */}
      <div>
        <h1 className="text-lg font-bold leading-none">
          WARYS
        </h1>
        <p className="text-sm text-gray-700">
          Reparación de calzado y artículos de piel
        </p>
      </div>

    </header>
  )
}

export default Header
