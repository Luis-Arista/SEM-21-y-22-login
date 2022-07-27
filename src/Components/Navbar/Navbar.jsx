import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <header>
        <nav>
            <Link className='navbar_boton' to='/'>Home</Link>
            <Link className='navbar_boton' to='/login'>Login</Link>
            <Link className='navbar_boton' to='/singup'>Registrate</Link>
        </nav>
    </header>
  )
}

export default Navbar