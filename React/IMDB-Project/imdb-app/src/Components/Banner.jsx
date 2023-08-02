import axios from "axios";

export default function Banner(){
    
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c4503da08fd450674fc73bc1114a40ee")
    .then(function(response){
        console.log(response.data.results);
        let movies = response.data.results;
        let randomMovies = movies[Math.floor(20 * Math.random())];
        console.log(randomMovies);
    });

    

    return(
        <div className="h-screen h-[70vh] bg-pattern bg-no-repeat flex items-end">
            {/* style = {{backgroundImage:`url()`}}  */}
            <div className="bg-stone-900/60 w-full p-2 text-center text-white"> John Wick</div>
        </div>
    )
}