import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (    
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                  }/>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
        </>
    
  );
}

export default App;
