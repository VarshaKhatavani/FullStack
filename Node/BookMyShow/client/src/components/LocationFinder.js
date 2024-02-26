import { useEffect } from "react";

const LocationFinder = ({ onLocationFound }) => {
    console.log(onLocationFound);
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position);
                const {latitude, longitude} = position.coords;
                console.log(latitude);
                console.log(longitude);
                onLocationFound(latitude, longitude);
            }, (error)=> {
                console.log('Error getting user location:', error);
            })
        }
    },[onLocationFound]);
    return onLocationFound;
}

export default LocationFinder ;