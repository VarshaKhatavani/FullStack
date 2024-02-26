import { useCallback, useState } from "react";
import LocationFinder from "../components/LocationFinder";
import NearbyTheatres from "../components/NearbyTheaters";

const Theatres = () =>{

    const [userLocation, setUserLocation] = useState(null);

    const handleLocation = useCallback((latitude, longitude) =>{
        setUserLocation({latitude, longitude});
         console.log('-------',latitude);
         console.log('--------',longitude);
    },[setUserLocation]);
    
    return(
        <div>
            <h1>BookMyShow - Nearby Theatres</h1>
            {/* get the location (latitude & longitude) of a user using geoloctaion */}
            <LocationFinder onLocationFound={handleLocation} />
            {/* get the nearby thetres list by passing */}
            {
                userLocation &&
                (<NearbyTheatres latitude={userLocation.latitude} longitude={userLocation.longitude} />)
            }
        </div>
    )

}

export default Theatres ;