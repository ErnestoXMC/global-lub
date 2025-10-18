import React from 'react'

const Contacto = () => {
  return (
    <section className='py-12 md:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tight'>
                Contáctanos
              </h2>
              <p className='text-lg text-gray-600 leading-relaxed'>
                ¿Necesitas asesoría en lubricantes? Completa el formulario de consulta del proyecto.
              </p>
            </div>
            <div className='space-y-4 pt-8'>
              <div>
                <h4 className='font-bold text-gray-900 text-lg mb-1'>Global Lub</h4>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='w-6 h-6 rounded-full flex-shrink-0 mt-1 overflow-hidden'>
                  <img 
                    src="src/assets/img/droplets.png" 
                    alt="Icono" 
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-gray-600'>Av. Industrial 123, Lima, Perú 15001</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='w-6 h-6 rounded-full flex-shrink-0 mt-1 overflow-hidden'>
                  <img 
                    src="src/assets/img/droplets.png" 
                    alt="Icono" 
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-gray-600'>ventas@globallub.com</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='w-6 h-6 rounded-full flex-shrink-0 mt-1 overflow-hidden'>
                  <img 
                    src="src/assets/img/droplets.png" 
                    alt="Icono" 
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-gray-600'>979-947-680</p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 p-8'>
            <form className='space-y-6'>
              <div>
                <input
                  type="text"
                  placeholder="Nombre"
                  className='w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-500'
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo"
                  className='w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:border-gray-900 transition-colors placeholder-gray-500'
                />
              </div>
              <div>
                <textarea
                  rows="6"
                  placeholder="Tu mensaje"
                  className='w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:border-gray-900 transition-colors resize-none placeholder-gray-500'
                ></textarea>
              </div>
              <div className='pt-6'>
                <button
                  type="submit"
                  className='w-full bg-gray-700 text-white py-4 px-8 font-semibold hover:bg-gray-900 transition-colors duration-300 tracking-wider'
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contacto