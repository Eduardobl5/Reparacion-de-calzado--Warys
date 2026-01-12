function Services() {
  return (
    <div className="bg-gray-100 py-16 px-6">

      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestros servicios</h1>
        <p className="text-gray-600">
          Reparación especializada en calzado y artículos de piel, con técnicas tradicionales y acabados de calidad.
        </p>
      </div>

      {/* Grid de servicios */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Reparación de calzado */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Reparación de calzado
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Cambio de suela (hule, vaqueta)</li>
            <li>• Costura y parches</li>
            <li>• Pegado y hormado</li>
            <li>• Pintado y cambio de color</li>
          </ul>
        </div>

        {/* Bolsas */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Bolsas de dama
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Pintado y costura</li>
            <li>• Cambio de cierre</li>
            <li>• Cambio de asas</li>
            <li>• Reparación de herrajes</li>
          </ul>
        </div>

        {/* Mochilas */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Mochilas
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Cambio de cierre</li>
            <li>• Costura y parches</li>
            <li>• Reparación de látigos</li>
          </ul>
        </div>

        {/* Chamarras */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Chamarras de piel
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Pintado</li>
            <li>• Costura</li>
            <li>• Cambio de puños</li>
          </ul>
        </div>

        {/* Tacones */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Tacones
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Tapas</li>
            <li>• Pintado</li>
            <li>• Cambio de tacón</li>
            <li>• Látigos y hebillas</li>
          </ul>
        </div>

        {/* Lavado de tenis */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold mb-3 text-orange-600">
            Lavado de tenis
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Tenis de piel</li>
            <li>• Gamusa</li>
            <li>• Tela</li>
          </ul>
        </div>

      </div>

      {/* Nota final */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <p className="text-gray-600 italic">
          Estos servicios y más son realizados por manos expertas, cuidando cada detalle y ofreciendo siempre un precio justo.
        </p>
      </div>

    </div>
  )
}

export default Services
