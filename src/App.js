import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import FormRegistrate from './Components/FormRegistrate/FormRegistrate';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
           <Route path='/' element={ <Home /> } />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
