import { useState } from 'react';
import Skeleton  from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieCard(props){

    const[loading,setLoading] = useState(true);    

    if (loading) {
        setTimeout(()=>{
            setLoading(false);            
        },2500);        
    }

    return(
        <>        
        {
            loading ? (
                    <Skeleton width={180} height={240}/>
            ) : (
                <div className="h-[40vh] w-[180px] bg-cover rounded-2xl overflow-hidden hover:scale-110 duration-300 flex items-end" style={{backgroundImage:`url(http://image.tmdb.org/t/p/original/${props.poster_path})`}} >    
                    <div className="bg-stone-900/60 w-full p-2 text-center text-white"> 
                            {props.title}
                    </div>
                </div>      
            )
        }          
        </>
    )
}