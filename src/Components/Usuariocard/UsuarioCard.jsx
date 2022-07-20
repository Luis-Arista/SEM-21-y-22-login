import axios from 'axios'
import React from 'react'
import './UsuarioCard.css'

const UsuarioCard = ( { logeado , cargar,  usuario }) => {

  const eliminar = async( id ) => {
    let url = `http://localhost:4000/api/v1/usuario/${id}`
    await axios.delete( url )
    cargar()
   }

  return (
    <div>
        <div className="usuario_card">
          <div className="usuario_nombre">
              <h3>Nombre</h3>
              <p>{usuario.nombre  + ' ' + usuario.apellido }</p>
          </div>
          <div className="usuario_email">
              <h3>Email</h3>
              <p>{usuario.email}</p>
          </div>
          <div className="usuario_usuario">
              <h3>Usuario</h3>
              <p>{usuario.usuario}</p>
          </div>
          <div className="usuario_roll">
              <h3>Roll</h3>
              <p>{usuario.roll}</p>
          </div>
          { logeado.roll === 'Admin' ? <div className="usuario_boton">
            <button onClick = { () => eliminar( usuario._id )} >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              eliminar
            </button>
          </div> : ''}
        </div>
    </div>
  )
}

export default UsuarioCard