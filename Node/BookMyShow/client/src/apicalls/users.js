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
        console.log('login user method called')
        const response = await axiosInstance.post('/api/users/login',payload);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const GetCurrentUser = async()=>{
    try {
        console.log('get current user method called')
        const response = await axiosInstance.get("/api/users/get-current-user");
        console.log(response);
        return response.data;
    } catch (error) {
        return error
    }
}