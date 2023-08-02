import axios from "axios";
import { useEffect, useState } from "react";

export default function Banner(){

    let [movieObj, setMovieObj] = useState({});
    
    // without useEffect it will render again & again 
    // as upon changing the state component gets render then again axios get the request & so on 
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c4503da08fd450674fc73bc1114a40ee")
        .then(function(response){
            console.log(response.data.results);
            let movies = response.data.results;
            let randomMovies = movies[Math.floor(20 * Math.random())];
            console.log(randomMovies);
            setMovieObj(randomMovies);
        });
    },[])

    if(movieObj.poster_path === undefined){
        return <>Loading...</>
    }

    // bg-pattern , h-screen  in class
    return(
        <div className="h-[70vh] bg-cover bg-center bg-no-repeat flex items-end" style = {{backgroundImage:`url(http://image.tmdb.org/t/p/original/${movieObj.poster_path})`}} > 
            
            <div className="bg-stone-900/60 w-full p-2 text-center text-white">{movieObj.title}</div>
        </div>
    )
}