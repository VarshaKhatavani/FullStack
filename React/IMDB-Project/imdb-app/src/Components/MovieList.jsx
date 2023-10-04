import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

export default function MovieList() {
  let [moviesObj, setMovieObj] = useState(undefined);
  let [currentPage, setCurrentPage] = useState(1);
  let [watchlist, setWatchList] = useState([]);
  const totalPages = 500;

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
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=c4503da08fd450674fc73bc1114a40ee&page=${currentPage}`
      )
      .then(function (response) {
        console.log(response.data);
        //moviesObj = response.data ;
        setMovieObj(response.data.results);
      });
  }, [currentPage]);

  useEffect(() => {
    let favouriteMoviesLocalStorage = JSON.parse(
      localStorage.getItem("movies-app")
    );
    setWatchList(favouriteMoviesLocalStorage);
  }, []);

  console.log(moviesObj);

  let handleRemoveFromWatchList = (id) => {
    // newWatchList contains all the elements from the original watchlist
    // array except for the one with the id value that matches the one passed as an argument to the function
    let newWatchList = watchlist.filter((movieId) => {
      return movieId !== id;
    });
    localStorage.setItem("movies-app", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  if (moviesObj === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-auto p-3">
      <div className="text-3xl font-bold text-center p-3">Trending Movies</div>

      <div className="flex flex-wrap gap-4 justify-evenly">
        {moviesObj.map((mObject) => {
          return (
            <MovieCard
              id={mObject.id}
              key={mObject.id}
              title={mObject.title}
              watchList={watchlist}
              poster_path={mObject.poster_path}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChanges={handlePageChange}
        calculatePagesToShow={calculatePagesToShow}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );

  // For example, show 5 pages centered around the current page
  function calculatePagesToShow() {
    const pagesToShow = [];
    const pagesToDisplay = 5;

    // start page will be
    let startPage = Math.max(currentPage - Math.floor(pagesToDisplay / 2), 1);
    let endPage = startPage + pagesToDisplay - 1;

    // handle edge case for last page
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - pagesToDisplay + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    return pagesToShow;
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }
}
