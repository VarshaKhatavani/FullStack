import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import Banner from './Components/Banner';
import WatchList from './Components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  let [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    console.log("hello", watchlist);
    //let newWatchList = [...watchlist];
    //newWatchList.push(id);

    //same thing in one line
    let newWatchList = [...watchlist, movieObj]; //watchlist === null ? [movieObj] : 
    // copy watchlist array to newWatchList & push the latest id to newWatchList array
    localStorage.setItem("movies-app", JSON.stringify(newWatchList));
    console.log("newWatchList----", newWatchList);
    setWatchList(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    // newWatchList contains all the elements from the original watchlist
    // array except for the one with the id value that matches the one passed as an argument to the function
    let newWatchList = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("movies-app", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  useEffect(() => {
    let favouriteMoviesLocalStorage = JSON.parse(
      localStorage.getItem("movies-app")
    );
    if(favouriteMoviesLocalStorage == null){
      return;
    }
    setWatchList(favouriteMoviesLocalStorage);
  }, []);

  return (
        <BrowserRouter>
            <Navbar/> 
            <Routes>
              <Route path="/" element={
                <>
                  <Banner/>
                  <MovieList watchList={watchlist}
                             setWatchList={setWatchList}
                             handleAddToWatchList={handleAddToWatchList}
                             handleRemoveFromWatchList={handleRemoveFromWatchList}/>           
                </>
              }></Route>
              <Route path="/watchlist" element={
                <WatchList watchList={watchlist} 
                          handleRemoveFromWatchList={handleRemoveFromWatchList}
                />}>                
              </Route>
              {/* Note - Path is specified in Navbar anchor-->Link tag */}
            </Routes>
        </BrowserRouter>  
      );
}

export default App;
