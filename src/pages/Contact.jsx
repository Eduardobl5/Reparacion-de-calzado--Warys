function Contact() {
  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-6">

      {/* Título */}
      <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Contacto
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estamos para ayudarte. Visítanos o contáctanos para cotizar tu reparación.
        </p>
      </div>

      {/* Contenido */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">

        {/* Información */}
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            Encuéntranos
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
            Sábados: 10:00 am – 4:30 pm
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://wa.me/5213313661807"
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition text-center font-semibold"
            >
              WhatsApp
            </a>

            <a
              href="tel:3313661807"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
            >
              Llamar
            </a>
          </div>
        </div>

        {/* Texto + Imagen */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
              Warys
            </h2>
            <p className="text-gray-700 text-center md:text-left">
              Estamos encantados de atenderte con el mejor trato y la mayor calidad.
              Trabajamos para darte un servicio exclusivo y personalizado en cada reparación.
            </p>
          </div>

          <img
            src="/ImagenWarys.jpg"
            alt="Taller Warys"
            className="rounded-lg object-cover w-full h-48 md:h-full"
          />
        </div>

      </div>

      {/* Mapa */}
      <div className="max-w-5xl mx-auto mt-10 md:mt-12">
        <iframe
          title="Mapa Warys"
          src="https://www.google.com/maps?q=Av.+de+la+Cruz+2204&output=embed"
          className="w-full h-64 md:h-80 rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

    </section>
  )
}

export default Contact
