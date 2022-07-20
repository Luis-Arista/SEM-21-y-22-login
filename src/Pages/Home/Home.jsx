import React , { useState } from 'react'
import Alerta from '../../Components/Alerta/Alerta';
import AlertaForm from '../../Components/Alerta/AlertaForm';
import FormLogin from '../../Components/FormLogin/FormLogin'
import FormRegistroCliente from '../../Components/FormRegistroCliente/FormRegistroCliente';
import Usuarios from '../../Components/Usuarios/Usuarios'

const Home = () => {

    const [ resultado , setResutlado ] = useState('Error')
    const [ aviso , setAviso ] = useState('no')
    const [ registrar , setRegistrar ] = useState('no')
   
  return (
    <div>
        {
          registrar === 'no' ? 
          <div>
              { resultado === 'Error' ? <FormLogin setRegistrar={setRegistrar} setAviso={setAviso} setResutlado={setResutlado}  /> : <Usuarios resultado={resultado._id} /> }
         </div> : <FormRegistroCliente setRegistrar={setRegistrar} aviso={aviso} setAviso={setAviso} />
        }
        <div>
            { aviso === 'si' ? <Alerta /> : '' }
        </div>
        <div>
          { aviso === 'si' && registrar === 'si' ? <AlertaForm /> : ''}
        </div>
    </div>
  )
}

export default Home