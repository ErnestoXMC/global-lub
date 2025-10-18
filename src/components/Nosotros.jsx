import React from 'react'

const Nosotros = () => {
  return (
    <section 
      className='py-12 md:py-20 relative'
      style={{
        backgroundImage: 'url(src/assets/img/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='absolute inset-0 bg-black/70 backdrop-blur-sm'></div>
      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        <div className='flex flex-col md:flex-row gap-12 md:gap-16 items-center'>
          <div className='w-full md:w-1/2'>
            <div className='relative'>
              <img 
                src="src/assets/img/nosotros.webp" 
                alt="Lubricantes y maquinaria" 
                className='w-full h-auto relative z-10 shadow-2xl'
              />
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='space-y-6'>
              <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2'>
                  Quiénes somos
                </h2>
                <div className='w-20 h-1 bg-blue-500'></div>
              </div>

              <p className='text-base md:text-lg text-gray-200 leading-relaxed'>
                Somos una empresa especialista en lubricación, con <span className='font-semibold text-white'>33 años de experiencia</span> y dedicada a la comercialización de aceites y grasas para el sector automotriz e industrial.
              </p>
              <p className='text-base md:text-lg text-gray-200 leading-relaxed'>
                Nuestras actividades están enfocadas, principalmente en la atención de los siguientes sectores económicos: <span className='font-medium text-white'>Agricultura, Construcción, Minería, Pesca, Producción, Transporte</span>, entre otros.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Nosotros