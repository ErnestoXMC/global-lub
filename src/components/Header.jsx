import React from 'react'

const Header = ({ era }) => {

    const {nombre, descripcion} = era;

    return (
        <>
            <h1 className='bg-indigo-600'>Este es el nombre: {nombre}</h1>
            <p>Esta es mi descripcion: {descripcion}</p>
        </>
    )
}

export default Header