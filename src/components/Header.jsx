import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [menuMobile, setMenuMobile] = useState(false);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                .header-font {
                    font-family: 'Poppins', sans-serif;
                }
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .menu-item {
                    animation: slideDown 0.3s ease-out forwards;
                }
                .menu-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
                .menu-item:nth-child(2) { animation-delay: 0.15s; opacity: 0; }
                .menu-item:nth-child(3) { animation-delay: 0.2s; opacity: 0; }
                .menu-item:nth-child(4) { animation-delay: 0.25s; opacity: 0; }
                .menu-item:nth-child(5) { animation-delay: 0.3s; opacity: 0; }
            `}</style>
            <header className='relative min-h-screen bg-cover bg-center bg-no-repeat header-font' style={{ backgroundImage: 'url(/background.webp)' }}>
                <div className='absolute inset-0 bg-black/60'></div>
                <div className='relative z-10'>
                    <div className='w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6'>
                        <nav className="relative z-50 flex justify-between items-center max-w-screen-2xl mx-auto">
                            <div className="flex items-center gap-x-10 lg:gap-x-12 xl:gap-x-16">
                                <a aria-label="Home" href="#" className="flex-shrink-0">
                                    <img className="h-12 md:h-14 lg:h-16 w-auto" src="/logo.jpg" alt="" />
                                </a>
                                <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
                                    <a className="inline-block rounded-lg px-3 py-2 text-sm xl:text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">Inicio</a>
                                    <a className="inline-block rounded-lg px-3 py-2 text-sm xl:text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">Quienes Somos</a>
                                    <a className="inline-block rounded-lg px-3 py-2 text-sm xl:text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">Productos</a>
                                    <a className="inline-block rounded-lg px-3 py-2 text-sm xl:text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">Servicios</a>
                                    <a className="inline-block rounded-lg px-3 py-2 text-sm xl:text-base font-semibold text-white hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap">Contacto</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6">

                                <a className="hidden sm:inline-flex items-center justify-center rounded-full py-2 px-3 md:px-4 lg:px-5 text-xs sm:text-sm md:text-base lg:text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-yellow-500 text-slate-900 hover:bg-yellow-400 active:bg-yellow-600 focus-visible:outline-yellow-500 transition-colors whitespace-nowrap" color="blue" variant="solid" href="#">
                                   <span>Contactar<span className="hidden md:inline"> por WhatsApp</span></span>
                                </a>

                                <div className="-mr-1 lg:hidden">
                                    <div>
                                        <button onClick={() => setMenuMobile(!menuMobile)} className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden">
                                            <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-white" fill="none" strokeWidth="2" strokeLinecap="round">
                                                <path d="M0 1H14M0 7H14M0 13H14" className={`origin-center transition ${menuMobile ? 'scale-90 opacity-0' : ''}`}></path>
                                                <path d="M2 2L12 12M12 2L2 12" className={`origin-center transition ${!menuMobile ? 'scale-90 opacity-0' : ''}`}></path>
                                            </svg>
                                        </button>
                                        { menuMobile && (
                                            <>
                                                <div className="fixed inset-0 z-[60] bg-black/80" onClick={() => setMenuMobile(false)}></div>
                                                <div className="fixed top-24 left-4 right-4 z-[70] flex flex-col rounded-lg bg-slate-900 p-3 text-base text-white shadow-2xl">
                                                    <a className="menu-item block w-full px-4 py-3 hover:bg-slate-700 rounded-md transition-colors duration-200" href="#">Inicio</a>
                                                    <a className="menu-item block w-full px-4 py-3 hover:bg-slate-700 rounded-md transition-colors duration-200" href="#">Quienes somos</a>
                                                    <a className="menu-item block w-full px-4 py-3 hover:bg-slate-700 rounded-md transition-colors duration-200" href="#">Productos</a>
                                                    <a className="menu-item block w-full px-4 py-3 hover:bg-slate-700 rounded-md transition-colors duration-200" href="#">Servicios</a>
                                                    <a className="menu-item block w-full px-4 py-3 hover:bg-slate-700 rounded-md transition-colors duration-200" href="#">Contacto</a>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='relative z-0 flex items-center justify-center min-h-[calc(100vh-120px)]'>
                    <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight'>
                            GLOBAL LUB
                        </h1>
                        <div className='w-24 h-1 bg-yellow-500 mx-auto mb-6'></div>
                        <p className='text-lg sm:text-xl md:text-2xl text-gray-200 font-light italic max-w-2xl mx-auto'>
                            Soluciones integrales en lubricación industrial para optimizar el rendimiento de tu operación
                        </p>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header