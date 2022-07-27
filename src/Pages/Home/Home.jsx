import React , { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'; 
import { ColorContext } from '../../Context/ColorContext'
import { Link } from 'react-router-dom';
import './Home.css'
 
 
const Home = () => {

  const { color , setColor } = useContext( ColorContext )
  const { colorTexto , setColorTexto } = useContext( ColorContext )

  const { user } = useContext( UserContext )

 
 const cambiarTema = () => {
    if (color === 'black') {
      setColor( 'white')
      setColorTexto('black')
    } else {
      setColor( 'black')
      setColorTexto('white')
    }
 }

  return (
   <section style={ { background: `${color}` }  } className='section_home'>
    
    <h1 style={{color: `${colorTexto}`}} >Hola {user === undefined ? 'sin usuario' : user.nombre  }</h1>
    <p style={{color: `${colorTexto}`}} >{user === undefined ? 'sin usuario' : user.email}</p>

    <button onClick={ () => cambiarTema() } >{ color === 'white' ? 'Tema obscuro' : 'Tema claro' }</button>
    
    <Link to = { user === undefined  ? '/login' : '/' }>
        <button>{ user === undefined ? 'Inicia secion para comprar' : 'comprar' }</button>
    </Link>

   </section>
  )
}

export default Home