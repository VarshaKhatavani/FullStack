import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { ShowLoading, HideLoading } from "../redux/loadersSlice";

    function ProtectedRoute({ children }) {
        console.log(children);
        const { user } = useSelector((state) => state.users);
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const getpresentUser = async () => {
            try {
                dispatch(ShowLoading());
                const response = await GetCurrentUser();
                dispatch(HideLoading());
                if (response.success) {
                    dispatch(SetUser(response.data));
                } else {
                    dispatch(SetUser(null));
                    message.error(response.message);
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            } catch (error) {
                dispatch(HideLoading());
                dispatch(SetUser(null));
                message.error(error.message);
            }
        };

        useEffect(() => {
            const checkUserAuthentication = async () => {
                if (localStorage.getItem("token")) {
                    await getpresentUser();
                } else {
                    navigate("/login");
                }
            };
            checkUserAuthentication();
        });

        return(
                user && <div>
                {user.name}
                <div className="content mt-1 p-1">{children}</div>
                </div> 
        )

    }

    export default ProtectedRoute;