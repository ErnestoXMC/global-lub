import React, { useEffect, useRef } from "react";

const Contacto = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Insertar script reCAPTCHA
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Espera a que el DOM esté listo
    const timer = setTimeout(setupFormListener, 150);

    function setupFormListener() {
      const form = document.getElementById("contactForm");
      const status = document.getElementById("form-status");
      const submitButton = document.getElementById("submit-button");

      if (!form || !status || !submitButton) return;

      // Variable para controlar el estado de envío
      let isSubmitting = false;

      // Asignamos target al iframe oculto para que el POST no redirija la página
      if (iframeRef.current && iframeRef.current.name) {
        form.target = iframeRef.current.name;
      }

      const handleSubmit = (e) => {
        e.preventDefault();

        // Prevenir múltiples envíos
        if (isSubmitting) {
          status.innerHTML = "⚠️ El formulario ya se está enviando, por favor espera...";
          return;
        }

        // Honeypot: Revisará si se trata de un bot
        const honey = form.querySelector("[name='_honey']");
        if (honey && honey.value) {

          status.innerHTML = "⚠️ Detectado comportamiento sospechoso.";
          return;
        }

        // Verifica la existencia del reCAPTCHA
        if (typeof window.grecaptcha === "undefined") {
          status.innerHTML = "⚠️ reCAPTCHA no se cargó — recarga la página.";
          return;
        }

        const recaptchaResponse = window.grecaptcha.getResponse();
        if (!recaptchaResponse) {
          status.innerHTML = "⚠️ Por favor, verifica que eres una persona.";
          return;
        }

        // Activar estado de envío
        isSubmitting = true;
        // Deshabilitar el botón y cambiar texto
        submitButton.disabled = true;
        submitButton.innerHTML = `
          <div class="flex items-center justify-center space-x-2">
            <svg class="animate-spin w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Enviando...</span>
          </div>
        `;
        // Cambiar estilo del botón
        submitButton.className = "w-full bg-gray-400 text-gray-600 py-4 rounded-lg cursor-not-allowed font-semibold text-lg transition-all duration-200 shadow-lg flex items-center justify-center space-x-2";

        // Mostrar mensaje de carga
        status.innerHTML = "📤 Enviando mensaje...";

        // Enviar usando form.submit() — el target apunta al iframe oculto
        form.submit();
      };

      form.addEventListener("submit", handleSubmit);

      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }

    // Listener para detectar que el iframe terminó de cargar la respuesta
    const onIframeLoad = () => {
      const status = document.getElementById("form-status");
      const submitButton = document.getElementById("submit-button");

      if (!status || !submitButton) return;

      // Asumimos éxito porque FormSubmit devuelve una página HTML en el iframe.
      status.innerHTML = "✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!";
      
      // reset form & recaptcha
      const form = document.getElementById("contactForm");
      if (form) form.reset();
      if (typeof window.grecaptcha !== "undefined") {
        try { window.grecaptcha.reset(); } catch (err) {}
      }

      setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Enviar</span><span class="text-xl">→</span>';
        submitButton.className = "w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2";
      }, 2000);
    };

    const iframeEl = iframeRef.current;
    if (iframeEl) iframeEl.addEventListener("load", onIframeLoad);

    return () => {
      clearTimeout(timer);
      // remover script reCAPTCHA
      const scriptElement = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (scriptElement) document.head.removeChild(scriptElement);
      if (iframeEl) iframeEl.removeEventListener("load", onIframeLoad);
    };
  }, []);

  return (
    <section className="pt-[1.8rem] py-[4.8rem] md:pt-[6.6rem] md:py-[9.6rem] bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título principal centrado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(128,128,128,1)] mb-4">Contacto</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tarjeta unificada de contacto */}
          <div className="bg-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Sección izquierda - Información de contacto */}
              <div className="bg-yellow-100 p-10">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">¿Necesita información?</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Si desea mayor información sobre nuestros productos y servicios, contáctenos o deje sus datos en el formulario de contacto.
                </p>
                
                <div className="space-y-6">
                  {/* Central Primax */}
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-4">Dirección</h4>
                    <div className="bg-yellow-400 rounded-full py-4 px-8 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors cursor-pointer max-w-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 0C149.3 0 64 85.3 64 192c0 36.9 11 65.4 30.1 94.3l141.7 215c4.3 6.5 11.7 10.7 20.2 10.7s16-4.3 20.2-10.7l141.7-215C437 257.4 448 228.9 448 192C448 85.3 362.7 0 256 0m0 298.6c-58.9 0-106.7-47.8-106.7-106.8S197.1 85 256 85s106.7 47.8 106.7 106.8S314.9 298.6 256 298.6m0-170.6c-35.4 0-64 28.6-64 64s28.6 64 64 64s64-28.6 64-64s-28.6-64-64-64"/></svg>
                      <span className="font-bold text-gray-900 text-lg">Av. Separadora Industrial</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-4">Teléfono</h4>
                    <div className="bg-yellow-400 rounded-full py-4 px-8 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors cursor-pointer max-w-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                      <span className="font-bold text-gray-900 text-lg">979 947 680</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <h4 className="font-bold text-gray-800 text-xl mb-4">Email</h4>
                    <div className="bg-yellow-400 rounded-full py-4 px-8 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors cursor-pointer max-w-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg>
                      <span className="font-bold text-gray-900 text-lg">globallub@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección derecha - Formulario */}
              <div className="bg-white p-10 flex flex-col justify-center">
                {/* Iframe oculto — recibe la respuesta del POST */}
                <iframe
                  name="hidden_iframe"
                  ref={iframeRef}
                  title="hidden_iframe"
                  style={{ display: "none" }}
                />

                <form id="contactForm" action="https://formsubmit.co/4dffcdbde0cf37a401b689de21547795" method="POST" className="space-y-5">
                  {/* Campos nombre y correo lado a lado */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-200 text-gray-900" 
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <input 
                        name="email" 
                        type="email" 
                        required 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-200 text-gray-900" 
                        placeholder="Correo electrónico"
                      />
                    </div>
                  </div>

                  {/* Campo mensaje */}
                  <div>
                    <textarea 
                      name="message" 
                      rows="5" 
                      required 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all duration-200 resize-none text-gray-900" 
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  {/* Campos ocultos */}
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  {/* reCAPTCHA */}
                  <div className="g-recaptcha" data-sitekey="6Ldn0u8rAAAAAGanxY0_SLG72Zvu7LYzRi7yLvcH"></div>

                  {/* Botón de envío */}
                  <button 
                    type="submit" 
                    id="submit-button" 
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 "
                  >
                    <span>Enviar</span>
                    <span className="text-xl">→</span>
                  </button>

                  {/* Campos hidden de FormSubmit */}
                  <input type="hidden" name="_next" value="https://global-lub.netlify.app/" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Nuevo Mensaje desde la Web Global Lub" />
                  <input type="hidden" name="_template" value="box" />
                </form>

                <div id="form-status" className="text-gray-700 mt-3 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
