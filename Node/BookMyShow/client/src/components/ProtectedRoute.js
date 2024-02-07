import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { ShowLoading, HideLoading } from "../redux/loadersSlice";

function ProtectedRoute({ children }){

    const { user } = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getpresentUser = async()=>{
        try {
            
            dispatch(ShowLoading());
            const response = await GetCurrentUser();
            dispatch(HideLoading());

            if(response.success){
                dispatch(SetUser(response.data));
            }
            else{
                dispatch(SetUser(null));
                message.error(response.message);
                localStorage.removeItem("token");
                navigate("/login");
            }

        } catch (error) {
            
        }
    };

    useEffect(()=>{
        if(localStorage.getItem("token")){
            getpresentUser();
        }
        else{
            navigate("/login");
        }
    });

    return(
         user && <div>
            {user.name}
            <div className="content mt-1 p-1">{children}</div>
         </div> 
    )

}

export default ProtectedRoute;