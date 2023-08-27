import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import axios from "axios";

export default function MovieList(){
    
    let [moviesObj, setMovieObj] = useState(undefined);    

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c4503da08fd450674fc73bc1114a40ee")
        .then(function(response){
            console.log(response.data);
            //moviesObj = response.data ;
            setMovieObj(response.data.results);
        })      
    },[])

    console.log(moviesObj);
    
    if(moviesObj === undefined ){
        return(
            <div>Loading...</div>
        )
    }    
    
    return(
        <div className="flex-auto p-3">
            
            <div className="text-3xl font-bold text-center p-3">I am Trending Movie List</div>
            
            <div className="flex flex-wrap gap-4 justify-evenly">                
                {
                    moviesObj.map((mObject)=>{
                        return <MovieCard title={mObject.title} poster_path={mObject.poster_path} />  
                    })
                }              
            </div>  

            <Pagination/>      
            
        </div>        
    )
}