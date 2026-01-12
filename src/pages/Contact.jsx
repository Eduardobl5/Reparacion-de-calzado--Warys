function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      
      {/* Título */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-600">
          Estamos para ayudarte. Visítanos o contáctanos para cotizar tu reparación.
        </p>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">

        {/* Información */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-bold text-orange-600 text-center">
            Encuentranos
          </h2>

          <p>
            📍 <strong>Dirección:</strong><br />
            Av. de la Cruz 2204
          </p>

          <p>
            📞 <strong>Teléfono:</strong><br />
            33 1366 1807
          </p>

          <p>
            🕒 <strong>Horario:</strong><br />
            Lunes a viernes: 10:00 am – 7:00 pm <br />
            Sabados: 10:00 am - 4:30 pm
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://wa.me/5213313661807"
              target="_blank"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:3312345678"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Llamar
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="grid grid-cols-2 bg-white rounded-lg shadow-md p-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
            Warys
          </h2>
          <p>Estamos encantados de atenderte con el mejor trato y la mayor calidad deseada por nuestro
            clientes, estamos trabajando para darte un servicio exclusivo y personalizado.
          </p>

          </div>

            <div>
              <img src="/ImagenWarys.jpg" alt="Logo" 
              className="rounded-md"
            />
            </div>
        </div>

      </div>

      {/* Mapa */}
      <div className="max-w-5xl mx-auto mt-12">
        <iframe
          title="Mapa Warys"
          src="https://www.google.com/maps?q=Av.+de+la+Cruz+2204&output=embed"
          className="w-full h-80 rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

    </div>
  )
}

export default Contact
