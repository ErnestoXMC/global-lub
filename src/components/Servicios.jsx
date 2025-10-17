import React from 'react'

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      titulo: "Venta de Lubricantes",
      descripcion: "Amplio catálogo de lubricantes industriales y automotrices de las mejores marcas para satisfacer todas sus necesidades."
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      titulo: "Entrega Rápida",
      descripcion: "Servicio de envío eficiente y puntual para garantizar que reciba sus productos cuando los necesite."
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "Asesoría Técnica",
      descripcion: "Recomendaciones personalizadas para seleccionar el lubricante ideal según su tipo de maquinaria y uso."
    }
  ];

  return (

    <>
      {/* Informacion de la seccion Servicios */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Especialistas en la venta y distribución de lubricantes de alta calidad
              para industria y automoción.
            </p>
          </div>

          {/* Iteracion de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
                  {servicio.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {servicio.titulo}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  )
}

export default Servicios