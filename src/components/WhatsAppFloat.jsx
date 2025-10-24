import React from 'react'

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.link/y9k1el"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-green-500 hover:bg-green-600 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/logo_whatsapp.svg" 
        className="h-10 w-10 md:h-12 md:w-12" 
        alt="WhatsApp" 
      />
    </a>
  )
}

export default WhatsAppFloat