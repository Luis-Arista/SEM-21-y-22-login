import React , { useState  } from 'react'
import axios from 'axios'
import './FormRegistroCliente.css'
import { Link } from 'react-router-dom'
import './FormRegistroCliente.css'

  

const FormRegistroCliente = ( ) => {


    const [ nombre , setNombre ] = useState('')
    const [ apellido , setApellido ] = useState('')
    const [ usuario , setUsuario ] = useState('')
    const [ contraseña , setContraseña ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ roll ] = useState('Cliente')

    const registrarse = async() => {
        if( nombre !== '' && apellido !== '' && usuario !== '' && contraseña !== '' && email !== '' ){
         const URL_ROOT = `http://localhost:4000/api/v1/registrar`
          let db = {
             nombre: nombre,
             apellido: apellido,
             usuario: usuario,
             email: email.toLocaleLowerCase(),
             contraseña: contraseña,
             roll: roll
         }
         await axios.post( URL_ROOT , db )
         resetearCampos()
        } else {
          
        }
     }
 
     const resetearCampos = () => {
         setNombre('')
         setApellido('')
         setUsuario('')
         setContraseña('')
         setEmail('')
     }

  return (
    <section className='seccion_registro'>
         <div className="section_formulario">
        <div className="form_contenedor">
                <div className="formulario_titulo">
                    <h2>Registra un nuevo usuario</h2>
                </div>
                <form className='form' action="#">
                    <div className="form_input">
                        <input value={nombre} onChange={ (e) =>{ setNombre( e.target.value )}} type="text" />
                        <label style={ nombre !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} > Nombre</label>
                    </div>
                    <div className="form_input">
                        <input value={apellido} onChange={ (e) => {setApellido( e.target.value ) }}  type="text" />
                        <label style={ apellido !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}}>Apellido</label>
                    </div>
                    <div className="form_input">
                        <input value={usuario} onChange={ (e) =>{ setUsuario( e.target.value ) } }  type="text" />
                        <label style={ usuario !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Usuario</label>
                    </div>
                    <div className="form_input">
                        <input value={email} onChange={ (e) => {setEmail( e.target.value )} }  type="email" />
                        <label style={ email !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Correo</label>
                    </div>
                    <div className="form_input">
                        <input value={contraseña} onChange={ (e) => {setContraseña( e.target.value ) } }  type="password" />
                        <label style={ contraseña !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Contrasela</label>
                    </div>
                    <div className="boton">
                        <Link to='/singup'>
                            <button onClick={ () => registrarse()}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Registrar
                            </button>
                        </Link>
                    </div>
                    <div className="boton">
                        <Link to='/'>
                            <button >
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Volver
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
       </div>
       <div>
         </div>
    </section>
  )
}

export default FormRegistroCliente