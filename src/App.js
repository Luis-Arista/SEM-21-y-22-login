import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import FormRegistroCliente from './Components/FormRegistroCliente/FormRegistroCliente';
import { UserProvider } from './Context/UserProvider'
import Navbar from './Components/Navbar/Navbar';
import FormLogin from './Components/FormLogin/FormLogin';
import { ColorProvider } from './Context/ColorProvider';

function App() {


  return (
    <div className="App">
       <BrowserRouter>
         <UserProvider>
           <ColorProvider>
              <Navbar/>
              <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/singup' element={ <FormRegistroCliente/> } />
                <Route path='/login' element={ <FormLogin/> } />
              </Routes>
          </ColorProvider>
         </UserProvider>
       </BrowserRouter>
    </div>
  );
}

export default App;
