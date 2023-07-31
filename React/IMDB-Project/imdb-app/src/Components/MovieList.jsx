export default function MovieList(){
    return(
        <div className="flex-auto p-3">
            
            <div className="text-3xl font-bold text-center p-3">I am Trending Movie List</div>
            <div className="flex flex-wrap gap-4 justify-start">
                <div className="h-[40vh] w-[180px] bg-cover rounded-2xl overflow-hidden hover:scale-110 duration-300 flex items-end" style={{backgroundImage:`url(https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg)`}} >    
                    <div className="bg-stone-900/60 w-full p-2 text-center text-white"> John Wick</div>
                </div>        
            </div>
            
            <div className="flex justify-center m-4">
                <div className="p-2 hover:cursor-pointer">Prev</div>
                <div className="p-2 hover:cursor-pointer">1</div>
                <div className="p-2 hover:cursor-pointer">Next</div>
            </div>
            
        </div>        
    )
}