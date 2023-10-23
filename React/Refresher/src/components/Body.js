import {resList} from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Content = () =>{
    return ( 
        <>           
            <div className="search">search</div>        
            <div className="res-container">{
                resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))
            }               
            </div>
        </>
    )
}

export default Content;