import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';
import Banner from './Components/Banner';
import WatchList from './Components/WatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  let [watchlist, setWatchList] = useState([]);

  let handleAddToWatchList = (id) => {
    console.log("hello", watchlist);
    //let newWatchList = [...watchlist];
    //newWatchList.push(id);

    //same thing in one line
    let newWatchList = watchlist === null ? [id] : [...watchlist, id];
    // copy watchlist array to newWatchList & push the latest id to newWatchList array
    console.log("newWatchList----", newWatchList);
    setWatchList(newWatchList);
    localStorage.setItem("movies-app", JSON.stringify(newWatchList));
  };

  useEffect(() => {
    let favouriteMoviesLocalStorage = JSON.parse(
      localStorage.getItem("movies-app")
    );
    setWatchList(favouriteMoviesLocalStorage);
  }, []);

  let handleRemoveFromWatchList = (id) => {
    // newWatchList contains all the elements from the original watchlist
    // array except for the one with the id value that matches the one passed as an argument to the function
    let newWatchList = watchlist.filter((movieId) => {
      return movieId !== id;
    });
    localStorage.setItem("movies-app", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };


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
