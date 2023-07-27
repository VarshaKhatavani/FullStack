import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import Banner from './Components/Banner';
import WatchList from './Components/WatchList';

function App() {
  return (
   <>
    <Navbar/>
    <Banner/>
    <MovieList/>
    <WatchList/>
   </>
  );
}

export default App;
