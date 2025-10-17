import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [menuMobile, setMenuMobile] = useState(false);

    return (
        <>
            <header className='py-10'>
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                    <nav className="relative z-50 flex justify-between">
                        <div className="flex items-center md:gap-x-12">
                            <a aria-label="Home" href="#">
                                <img className="h-16 w-auto" src="/logo.jpg" alt="" />
                            </a>
                            <div className="hidden md:flex md:gap-x-6">
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Inicio</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Quienes Somos</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Productos</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Servicios</a>
                                <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">Contacto</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5 md:gap-x-8">

                            <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" color="blue" variant="solid" href="#">
                               <span>Contactar<span className="hidden lg:inline"> por WhatsApp</span></span>
                            </a>

                            <div className="-mr-1 md:hidden">
                                <div>
                                    <button onClick={() => setMenuMobile(!menuMobile)} className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden">
                                        <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700" fill="none" strokeWidth="2" strokeLinecap="round">
                                            <path d="M0 1H14M0 7H14M0 13H14" className={`origin-center transition ${menuMobile ? 'scale-90 opacity-0' : ''}`}></path>
                                            <path d="M2 2L12 12M12 2L2 12" className={`origin-center transition ${!menuMobile ? 'scale-90 opacity-0' : ''}`}></path>
                                        </svg>
                                    </button>
                                    <div style={{ display: menuMobile ? "block" : "none" }} className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"></div>
                                    <div style={{ display: menuMobile ? "block" : "none" }} className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in">
                                        <a className="block w-full p-2" href="#">Inicio</a>
                                        <a className="block w-full p-2" href="#">Quienes somos</a>
                                        <a className="block w-full p-2" href="#">Productos</a>
                                        <a className="block w-full p-2" href="#">Servicios</a>
                                        <a className="block w-full p-2" href="#">Contacto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Header