import React , { useState } from 'react'
import axios from 'axios'
import './FormRegistroCliente.css'

const FormRegistroCliente = ( { setRegistrar , aviso , setAviso }) => {

 

    const [ nombre , setNombre ] = useState('')
    const [ apellido , setApellido ] = useState('')
    const [ usuario , setUsuario ] = useState('')
    const [ contraseña , setContraseña ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ roll , setRoll ] = useState('Cliente')

    const registrarse = async() => {
        if( nombre !== '' && apellido !== '' && usuario !== '' && contraseña !== '' && email !== '' ){
         const url = 'http://localhost:4000/api/v1/usuario'
         let db = {
             nombre: nombre,
             apellido: apellido,
             usuario: usuario,
             email: email.toLocaleLowerCase(),
             contraseña: contraseña,
             roll: roll
         }
         await axios.post( url , db )
         resetearCampos()
         setRegistrar('no')
        } else {
         setAviso('si')
        }
     }
 
     const resetearCampos = () => {
         setNombre('')
         setApellido('')
         setUsuario('')
         setContraseña('')
         setEmail('')
         setRoll('')
     }

  return (
    <section className='seccion_registro'>
         <div className="section_formulario">
        <div className="form_contenedor">
                <div className="formulario_titulo">
                    <h2>Registra un nuevo usuario</h2>
                </div>
                <div className="form">
                    <div className="form_input">
                        <input value={nombre} onChange={ (e) =>{ setNombre( e.target.value ) ; setAviso('no')}} type="text" />
                        <label style={ nombre !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} > Nombre</label>
                        { aviso === 'si' && nombre ==='' ? <p className='campo_blanco'>*</p> : '' }
                    </div>
                    <div className="form_input">
                        <input value={apellido} onChange={ (e) => {setApellido( e.target.value ) ; setAviso('no')}}  type="text" />
                        <label style={ apellido !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}}>Apellido</label>
                        { aviso === 'si' && apellido ==='' ? <p className='campo_blanco'>*</p> : '' }
                    </div>
                    <div className="form_input">
                        <input value={usuario} onChange={ (e) =>{ setUsuario( e.target.value ) ; setAviso('no')} }  type="text" />
                        <label style={ usuario !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Usuario</label>
                        { aviso === 'si' && usuario ==='' ? <p className='campo_blanco'>*</p> : '' }
                    </div>
                    <div className="form_input">
                        <input value={email} onChange={ (e) => {setEmail( e.target.value ) ; setAviso('no')} }  type="email" />
                        <label style={ email !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Correo</label>
                        { aviso === 'si' && email ==='' ? <p className='campo_blanco'>*</p> : '' }
                    </div>
                    <div className="form_input">
                        <input value={contraseña} onChange={ (e) => {setContraseña( e.target.value ) ; setAviso('no')} }  type="password" />
                        <label style={ contraseña !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Contrasela</label>
                        { aviso === 'si' && contraseña ==='' ? <p className='campo_blanco'>*</p> : '' }
                    </div>
                </div>
                <div className="boton">
                    <button onClick={ () => registrarse()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Registrar
                    </button>
                </div>
                <div className="boton">
                    <button onClick={ () => setRegistrar('no')}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Volver
                    </button>
                </div>
            </div>
       </div>
    </section>
  )
}

export default FormRegistroCliente