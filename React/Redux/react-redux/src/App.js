import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';

function App() {
  return (

        <BrowserRouter>        
        <Navbar/>
        <Routes>
            <Route path='/' element = {<Home/>}></Route>
            <Route path='/cart' element = {<Cart/>}></Route>
        </Routes>
        </BrowserRouter>   
  );
}
export default App;
