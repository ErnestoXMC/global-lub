import { Link, Navigate } from "react-router-dom"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Productos from "../components/Productos";


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
      <Productos />
    </>
    
  )
}

export default Principal