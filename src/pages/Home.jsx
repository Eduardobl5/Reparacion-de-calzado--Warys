import React from 'react'
import { useNavigate } from 'react-router-dom'
import WarysLogo from '../Logos/WarysLogo'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="bg-linear-to-b from-gray-700 to-gray-100">

      {/* HERO */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/ImagenWarys.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Contenido */}
        <div className="relative text-center px-4 max-w-4xl">
          
          {/* WARYS gigante */}
          <h1 className="
            text-5xl 
            sm:text-6xl 
            md:text-8xl 
            font-serif 
            tracking-[0.15em] 
            sm:tracking-[0.25em]
            mb-6
          ">
            WARYS
          </h1>

          {/* Subtítulo */}
          <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-4">
            Reparación de calzado y artículos de piel
          </h2>

          <p className="text-sm sm:text-lg mb-8 text-gray-200">
            Más de 20 años ofreciendo calidad, tradición y precio justo.
          </p>


          <button
            onClick={() => navigate('/services')}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition"
          >
            Ver servicios
          </button>

        </div>
      </section>


      {/* HISTORIA */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Nuestra historia
        </h2>
        <p className="text-sm sm:text-base text-white leading-relaxed">
          Warys es un taller de reparación de calzado y artículos de piel con raíces en el barrio.
          Desde 1999 trabajamos con técnicas tradicionales, manteniendo la esencia del oficio
          y adaptándonos a las nuevas necesidades.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="bg-linear-to-b from-gray-700 to-gray-400 py-16 px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Servicios destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'Cambio de suelas',
            'Reparación de cierres',
            'Parches y plantillas',
            'Tacones y tapas',
            'Cambio de color',
            'Lavado de tenis'
          ].map((servicio) => (
            <div
              key={servicio}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition text-center"
            >
              <h3 className="font-semibold text-lg">{servicio}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className=" py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm sm:text-base">
          <div>🛠 +20 años de experiencia</div>
          <div>👞 Trabajo artesanal</div>
          <div>💰 Precio justo</div>
          <div>📍 Taller local</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-b from-orange-500 to-gray-400 text-black py-14 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Dale nueva vida a tu calzado
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-black cursor-pointer px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Contáctanos
        </button>
      </section>

    </div>
  )
}

export default Home