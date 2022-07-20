import React , {useState} from 'react'
import axios from 'axios'
import './FormLogin.css'

const FormLogin = ( { setRegistrar,  setAviso , setResutlado } ) => {

    const [ email , SetEmail ] = useState('')
    const [ contraseña , setContraseña ] = useState('')

    const logear = async() => {
        let url = 'http://localhost:4000/api/v1/auth/login'
        let db = {
            email: email.toLocaleLowerCase(), 
            contraseña: contraseña
        }
        await axios.post( url , db )
        .then( (e) => {
            setResutlado(e.data)
            setAviso('no')
        })
        .catch( () => {
            setResutlado('Error')
            setAviso('si')
        })
     }

  return (
    <section>
        <div className="Seccion_login">
            <div className="contenedor_login">
                <div className="titulo_contendor">
                    <h2>Iniciar Sesion</h2>
                </div>
                <div className="login">
                    <form action='#'>
                        <div className="usuario_box">
                            <input onChange={ (e) => {SetEmail( e.target.value ); setAviso('no')} } type="email" required=''/>
                            <label style={ email !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Correo</label>
                        </div>
                        <div className="usuario_box">
                            <input onChange={ (e) => {setContraseña( e.target.value ); setAviso('no')} } type="password" required='' />
                            <label style={ contraseña !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Contraseña</label>
                        </div>
                    </form>
                </div>
                <div className="login_boton">
                    <button onClick={() => logear()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Iniciar Secion
                    </button>
                </div>
                <div className="registrar_boton">
                    <button onClick={() => {setRegistrar('si') ; setAviso('no') }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Registrate
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormLogin