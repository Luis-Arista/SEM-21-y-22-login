import React , { useState , useEffect } from 'react'
import axios from 'axios'
import UsuarioCard from '../Usuariocard/UsuarioCard'
import './Usuarios.css'
import FormRegistrate from '../FormRegistrate/FormRegistrate'
import AlertaForm from '../Alerta/AlertaForm'
import Navbar from '../Navbar/Navbar'

const Usuarios = ( { resultado } ) => {

    const [ logeado , setlogeado ] = useState('')

    const cargarUsuario = async() => {
        let url = `http://localhost:4000/api/v1/todos/${resultado}`
        const respuesta = await axios.get(url)
        setlogeado( respuesta.data)
    } 

    const [ usuarios , setUsuarios ] = useState([])
    const [ aviso , setAviso ] = useState('no')

    const cargar = async() => {
        let url = 'http://localhost:4000/api/v1/todos'
        const respuesta = await axios.get(url)
        setUsuarios(respuesta.data)
    }

    useEffect( () => {
        cargarUsuario()
        cargar()
    },[])

  return (
    <section className='section_usuario'>
        <Navbar  logeado={logeado}  />
        { aviso === 'si' ? <AlertaForm/> : '' }
        { logeado.roll === 'Admin' ? <FormRegistrate aviso={aviso} setAviso={setAviso} cargar={cargar} /> : ''}
        <div className="usuarios_contenedor">
            {
                usuarios.map( (usuario , i) => {
                    return(
                        <UsuarioCard logeado={logeado} cargar={cargar} usuario={usuario} key={i} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default Usuarios