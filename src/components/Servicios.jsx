import React, { useEffect, useState } from 'react'
import { servicios } from '../data/servicios';
import Servicio from './childrens/Servicio';

const Servicios = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(servicios);
  }, [])

  return (

    <>
      {/* Informacion de la seccion Servicios */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(128,128,128,1)] mb-2">
              Nuestros Servicios
            </h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Especialistas en la venta y distribución de lubricantes de alta calidad
              para industria y automoción.
            </p> */}
          </div>

          {/* Iteracion de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((servicio) => {
              const { id, title, image, type, description } = servicio;

              return (
                <Servicio
                  key={id}
                  title={title}
                  image={image}
                  type={type}
                  description={description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>

  )
}

export default Servicios