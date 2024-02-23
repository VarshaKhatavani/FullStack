import { axiosInstance } from "."

export const GetAllMovies = async() => {
    try {
        const response = await axiosInstance.get('api/movies/get-all-movies')
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const AddMovie = async(payload)=>{
    try {
        console.log('Add movie called');
        const response = await axiosInstance.post('api/movies/add-movie', payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const DeleteMovie =  async(payload)=>{
    try {
        const response = axiosInstance.put('api/movies/delete-movie',payload);
        return  (await response).data;
    } catch (error) {
        return error.response;
    }
}

export const UpdateMovie =  async(payload)=>{
    try {
        const response = axiosInstance.put('api/movies/update-movie',payload);
        return  (await response).data;
    } catch (error) {
        return error.response;
    }
}
