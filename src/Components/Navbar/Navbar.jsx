import React from 'react'
import './Navbar.css'

const Navbar = ( { logeado } ) => {


  return (
    <header>
        <nav>
            <div className="navbar_nombre">
                <h2>Hola: {logeado.nombre} {logeado.apellido}</h2>
            </div>
            <div className="navbar_menu">
                <p>{logeado.roll}</p>
                <a href="http://localhost:3000">Cerrar Secion</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar