import React from 'react'

const Servicio = ({ title, image, description, type }) => {
    
    // Iconos según el tipo de servicio
    const getIcon = () => {
        switch(type) {
            case 'venta':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                );
            case 'entrega':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                );
            case 'asesoria':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
        }
    };

    return (
        <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-yellow-500'>
            <div className='relative h-48 overflow-hidden'>
                <img 
                    src={`/${image}`} 
                    alt={`Imagen ${title}`}
                    className='w-full h-full object-cover'
                    style={{ clipPath: 'polygon(0 40%, 20% 0, 100% 0, 100% 100%, 0 100%)' }}
                />
            </div>
            
            {/* Círculo con icono centrado entre imagen y contenido */}
            <div className='flex justify-left ml-9'>
                <div className='relative -mt-6 w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10'>
                    {getIcon()}
                </div>
            </div>
            
            <div className='p-6 pt-4'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed mb-4'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Servicio