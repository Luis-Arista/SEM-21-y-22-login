import React , {useState , useContext } from 'react'
import axios from 'axios'
import './FormLogin.css'
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext'; 
import  env  from "react-dotenv";

const FormLogin = () => {

    const { setUser } = useContext( UserContext )
    const [ tipoForm , setTipoForm] = useState('password')

    
    const cambiarInput = (e) => {
         e.preventDefault()
         if( tipoForm === 'password' ){
            setTipoForm('text')
         }else{
            setTipoForm('password')
         }
    }

    const [ email , SetEmail ] = useState('')
    const [ contraseña , setContraseña ] = useState('')
     
  
    const logear = async() => {
        let url = `${env.API_URL}/auth/login`  
        let url2 = `${env.API_URL}/users/me`
        let db = {
            email: email.toLocaleLowerCase(), 
            contraseña: contraseña
        }
        await axios.post( url , db )
        .then( ( res ) => {
             return axios.get( url2 , {
                headers:{
                    'authorization': `Bearer ${ res.data.token }`
                }
            })
            .then((res) => {
                setUser(res.data)
            })
        })
        .catch( (Error) => {
            setUser('Error') 
            console.log('acceso denegado');  
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
                            <input onChange={ (e) => {SetEmail( e.target.value )} } type="email"  />
                            <label style={ email !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Correo</label>
                        </div>
                        <div className="usuario_box">
                            <input onChange={ (e) => {setContraseña( e.target.value )} } type={tipoForm}   />
                            <label style={ contraseña !== '' ? {top: '-20px', left : '0' , color: "#03e9f4", fontSize: '12px'} : {}} >Contraseña</label>
                            <button className='ver' onClick={(e) => cambiarInput(e)}>
                                {tipoForm === 'password' ? 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                       </svg> :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                      </svg>
                                }
                            </button>
                        </div>
                        <div className="login_boton">
                            <Link to='/login'>
                            <button onClick={() => logear()}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Iniciar Secion
                            </button>
                            </Link>
                       </div>
                       <div className="registrar_boton">
                            <Link to='singup'>
                                <button >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Registrate
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FormLogin