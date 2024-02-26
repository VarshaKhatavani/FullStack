import { useEffect, useState } from "react";
import { axiosInstance } from "../apicalls";


const NearbyTheatres = ({latitude, longitude}) => {

    const [theatres, setTheatres] = useState([]);

    useEffect(()=>{
        const fetchNearbyTheatres = async() =>{
            try {
                const response = await axiosInstance.get(`api/theatres/nearby-theatres?latitude=${latitude}&longitude=${longitude}`)
                setTheatres(response.data) ;
            } catch (error) {
                console.log('Error fetching nearby theatres:', error);
            }
        };
        fetchNearbyTheatres();
    },[latitude, longitude]);


    return(
        <div>
            <h2>Nearby Theatres</h2>
            <ul>
                {
                    theatres.map(t=>(
                        <li key={t._id}> {t.name} </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default NearbyTheatres ;