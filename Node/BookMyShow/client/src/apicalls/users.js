import { axiosInstance } from ".";

export const RegisterUser = async(payload) =>{
    try {
        const response = await axiosInstance.post('/api/users/register',payload);        
        return response.data;
    } catch (error) {
        return error;
    }
}

export const LoginUser = async(payload) =>{
    try {
        const response = await axiosInstance.post('/api/users/login',payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const GetCurrentUser = async()=>{
    try {
        const response = await axiosInstance.get("/api/users/get-current-user");
        return response.data;
    } catch (error) {
        return error
    }
}