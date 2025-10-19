import React from 'react'

const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/51979947680?text=Hola quiero más información de su negocio" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/logo_whatsapp.svg" 
        className="h-12 w-12" 
        alt="WhatsApp" 
      />
    </a>
  )
}

export default WhatsAppFloat