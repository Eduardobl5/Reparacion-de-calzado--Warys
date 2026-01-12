import React from 'react'

function About() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Quiénes somos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un taller con historia, tradición y compromiso con el buen trabajo.
          </p>
        </div>

        {/* HISTORIA */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Warys</strong> es un taller de reparación de calzado y artículos de piel
            con una historia que nace del trabajo, la constancia y el amor por un oficio
            que ha perdurado a lo largo del tiempo.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Nuestro camino comenzó en <strong>1999</strong>, después de años de experiencia
            en la fabricación de calzado. El primer taller abrió sus puertas en Fidel
            Velázquez 809, ofreciendo desde el inicio reparaciones honestas, de calidad
            y a un precio justo.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            A lo largo de los años, Warys ha enfrentado retos importantes. Durante una
            etapa complicada, el taller continuó trabajando de forma itinerante desde
            una camioneta equipada con las herramientas esenciales, manteniendo siempre
            el compromiso con nuestros clientes.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Desde <strong>2019</strong>, nos encontramos establecidos en Avenida de la Cruz
            2204, donde seguimos ofreciendo un servicio respaldado por la experiencia y
            el conocimiento del oficio.
          </p>
        </div>

        {/* VALORES */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Calidad
            </h3>
            <p className="text-gray-600">
              Cada reparación se realiza con cuidado, atención al detalle y materiales adecuados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Precio justo
            </h3>
            <p className="text-gray-600">
              Creemos en un trabajo honesto, bien hecho y con precios accesibles.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Tradición
            </h3>
            <p className="text-gray-600">
              Un oficio noble que sigue vigente gracias a la experiencia y el compromiso.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://media.gq.com.mx/photos/5d47b3470728790008e13a4d/master/w_1600%2Cc_limit/GettyImages-1023542632.jpg" alt="Calidad" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://tse3.mm.bing.net/th/id/OIP.6CwuMQ9XR67kVPwsCZOi7gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="precio" 
              className='w-full h-full'
              />
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src="https://cdn.pixabay.com/photo/2018/07/17/14/54/shoe-repair-3544334_1280.jpg" alt="tradicion" />
          </div>
        </div>

        {/* SERVICIOS DESTACADOS */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Nuestro trabajo
          </h2>

          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Reparación de calzado y artículos de piel, cambio de suelas, parches,
            cierres, tapas, tacones, pintado y cambio de color, hormado de zapatos
            y lavado de tenis, todo realizado por manos especialistas.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About