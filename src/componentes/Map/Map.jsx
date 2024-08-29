import React from 'react'

//Método Map:
//En React lo utilizamos generalmente para crear una lista de componentes a parit de un array de datos

const Map = () => {

    const productos = [
        {id: 1, nombre: "Pc Gamer", precio: 1000000},
        {id: 2, nombre: "Teclado Gamer", precio: 10000},
        {id: 3, nombre: "Mouse Gamer", precio: 15000},
        {id: 4, nombre: "Silla Gamer", precio: 500000}
    ]



  return (

    <div>
        <h2>Productos Gamer:</h2>
        <ul>
            {productos.map((producto)=>(
                <li key={producto.id}>
                    <span>{producto.nombre}</span>
                    <span>{producto.precio}</span>
                </li>
            )) }

        </ul>

    </div>
  )
}

export default Map