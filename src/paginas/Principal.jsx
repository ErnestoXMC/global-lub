import { Link, Navigate } from "react-router-dom"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Productos from "../components/Productos";
import Footer from "../components/Footer";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";
import Contacto from "../components/Contacto";


const Principal = () => {

  const era = {
    nombre: "Lubricantes Era",
    descripcion: "Los mejores lubricantes del mercado",
  }


  return (
    <>
      <Header
        era={era}
      />
      <Nosotros />
      <Productos />
      <Contacto />
      <Servicios />
      <Footer />
    </>

  )
}

export default Principal