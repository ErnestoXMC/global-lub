import React from 'react'
import Producto from './childrens/Producto'

const Productos = () => {
  return (
    <>
      <section className="bg-white pb-[1.8rem] md:pb-[6.6rem]">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(128,128,128,1)] mb-2">
              Nuestros Productos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-60 md:pt-80 flex-grow">
                <img src="sistemas-hidraulicos.png" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-3xl text-center px-2">Sistemas Hidráulicos</h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-60 md:pt-80 mb-4">
                <img src="engranajes.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-3xl text-center px-2">Engranajes</h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-48 md:pt-60">
                  <img src="equipos-compresores.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50"></div>
                  <h3 className="z-10 text-lg font-medium text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-xl md:text-2xl text-center px-2">Equipos Compresores</h3>
                </a>
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-48 md:pt-60">
                  <img src="cortes-maquinado.png" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50"></div>
                  <h3 className="z-10 text-lg font-medium text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-xl md:text-2xl text-center px-2">Cortes y Maquinado</h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-60 md:pt-80 flex-grow">
                <img src="aceite-de-motor.webp" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/50"></div>
                <h3 className="z-10 text-xl font-medium text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl md:text-3xl text-center px-2">Aceite de Motor</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Productos