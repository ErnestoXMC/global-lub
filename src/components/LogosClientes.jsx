const LogosClientes = () => {
  const logos = [
    { id: 1, nombre: "Dolby", imagen: "shell1.png" },
    { id: 2, nombre: "NVIDIA", imagen: "amalie.png" },
    { id: 3, nombre: "Accenture", imagen: "puma_energy.png" },
    { id: 4, nombre: "Pexels", imagen: "kluber_Lubrication.png" },
    { id: 5, nombre: "FastFile", imagen: "vistony.png" },
  ];

  return (
    <section className="py-12 px-4" style={{ backgroundColor: '#F6F7F8' }}>
      <div className="max-w-7xl mx-auto">
        {/* Texto superior */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-sm md:text-base font-medium">
            Impulsando la maquinaria de líderes en la industria global.
          </p>
        </div>

        {/* Contenedor flex que centra automáticamente */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <img
                src={logo.imagen}
                alt={logo.nombre}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosClientes;
