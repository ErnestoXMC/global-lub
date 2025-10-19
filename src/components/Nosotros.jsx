import React from 'react'

const Nosotros = () => {
  return (
    <section className='py-12 md:py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row gap-12 md:gap-16 items-center'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <div className='relative w-[70%] md:w-3/4'>
              <img 
                src="/nosotros.webp" 
                alt="Lubricantes y maquinaria" 
                className='w-full h-auto shadow-xl rounded-lg'
              />
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='space-y-6'>
              <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(128,128,128,1)] mb-2'>
                  Quiénes somos
                </h2>
              </div>

              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Somos una empresa especialista en lubricación, con <span className='font-semibold text-gray-900'>33 años de experiencia</span> y dedicada a la comercialización de aceites y grasas para el sector automotriz e industrial.
              </p>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                Nuestras actividades están enfocadas, principalmente en la atención de los siguientes sectores económicos: <span className='font-medium text-gray-900'>Agricultura, Construcción, Minería, Pesca, Producción, Transporte</span>, entre otros.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Nosotros