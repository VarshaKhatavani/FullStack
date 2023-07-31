import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import Banner from './Components/Banner';
import WatchList from './Components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
            <Navbar/> 
            <Routes>
              <Route path="/" element={
                <>
                  <Banner/>
                  <MovieList/>           
                </>
              }></Route>
              <Route path="/watchlist" element={<WatchList/>}></Route>
              {/* Note - Path is specified in Navbar anchor-->Link tag */}
            </Routes>
        </BrowserRouter>  
      );
}

export default App;
