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
        submitButton.className = "w-full bg-gray-400 text-gray-600 py-3 rounded-lg cursor-not-allowed transition-all duration-200";

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
        submitButton.innerHTML = "Enviar Mensaje";
        submitButton.className = "w-full bg-[rgba(242,244,48)] hover:bg-yellow-400 text-gray-900 py-3 rounded-lg transition-all duration-200";
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
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white w-full flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgba(128,128,128,1)] mb-4">Contáctanos</h3>
            <p className="text-gray-600 mb-6 max-w-md">¿Necesitas asesoría en lubricantes? Completa el formulario de consulta del proyecto.</p>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center space-x-3"><span>Av. Industrial 123, Lima, Perú 15001</span></div>
              <div className="flex items-center space-x-3"><span>ventas@globallub.com</span></div>
              <div className="flex items-center space-x-3"><span>979-947-680</span></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-[rgba(128,128,128,1)] p-10">
            <h3 className="text-3xl font-bold text-white mb-4">Envíanos un mensaje</h3>

            {/* Iframe oculto — recibe la respuesta del POST */}
            <iframe
              name="hidden_iframe"
              ref={iframeRef}
              title="hidden_iframe"
              style={{ display: "none" }}
            />

            <form id="contactForm" action="https://formsubmit.co/18d0f52095d86aec4d5c71feebadcdde" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white">Nombre</label>
                <input name="name" type="text" required className="w-full mt-1 p-3 rounded-lg bg-white text-gray-900" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Correo</label>
                <input name="email" type="email" required className="w-full mt-1 p-3 rounded-lg bg-white text-gray-900" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white">Mensaje</label>
                <textarea name="message" rows="4" required className="w-full mt-1 p-3 rounded-lg bg-white text-gray-900"></textarea>
              </div>

              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="g-recaptcha" data-sitekey="6Ldn0u8rAAAAAGanxY0_SLG72Zvu7LYzRi7yLvcH"></div>

              <button type="submit" id="submit-button" className="w-full bg-[rgba(242,244,48)] hover:bg-yellow-400 text-gray-900 py-3 rounded-lg transition-all duration-200">
                Enviar Mensaje
              </button>

              <input type="hidden" name="_next" value="https://global-lub.netlify.app/" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nuevo Mensaje desde la Web Global Lub" />
              <input type="hidden" name="_template" value="box" />
            </form>

            <div id="form-status" className="text-white mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
