import { axiosInstance } from "."

export const GetAllMovies = async() => {
    try {
        const response = await axiosInstance.get('api/movies/get-all-movies')
        return response.data;
    } catch (error) {
        return error.response;
    }
}