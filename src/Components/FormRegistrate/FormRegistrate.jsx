import React , { useState } from 'react'
import  axios  from 'axios'
import './FormRegistrate.css'
import env from 'react-dotenv'

 
const FormRegistrate = ( { aviso , setAviso , cargar } ) => {

    const [ nombre , setNombre ] = useState('')
    const [ apellido , setApellido ] = useState('')
    const [ usuario , setUsuario ] = useState('')
    const [ contraseña , setContraseña ] = useState('')
    const [ email , setEmail ] = useState('')
    const [ roll , setRoll ] = useState('')

    const registrarse = async() => {
       if( nombre !== '' && apellido !== '' && usuario !== '' && contraseña !== '' && email !== '' && roll !== '' ){
        const URL_ROOT = `${env.REACT_API}/registrar`
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
        cargar()
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
    <section className='usuarios_registrar'>
       <div className="section_formulario">
        <div className="form_contenedor">
                <div className="formulario_titulo">
                    <h2>Registra un nuevo usuario</h2>
                </div>
                <form className="form">
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
                    <div className="form_input">
                        <select value={roll} onChange={ (e) => {setRoll( e.target.value ) ; setAviso('no')}}> 
                            <option value="">Roll</option>
                            <option value="Cliente">Cliente</option>
                            <option value="Admin">Admin</option>
                        </select>
                        { aviso === 'si' && roll ==='' ? <p className='campo_blanco'>*</p> : '' }
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
                </form>
            </div>
       </div>
    </section>
  )
}

export default FormRegistrate