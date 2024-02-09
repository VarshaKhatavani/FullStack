import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import Profile from './pages/Profile';

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
                  <Route path='/admin' element={
                    <ProtectedRoute>
                      <Admin/>
                    </ProtectedRoute>
                  }/>
                  <Route path='/profile' element={
                    <ProtectedRoute>
                      <Profile/>
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
