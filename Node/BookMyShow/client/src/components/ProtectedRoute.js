import { message } from "antd";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { ShowLoading, HideLoading } from "../redux/loadersSlice";
import React, { useState } from 'react';
import {  LogoutOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import '../index.css';
import Banner from "../pages/Home/banner";

    function ProtectedRoute({ children }) {

        const { user } = useSelector((state) => state.users);
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const [current, setCurrent] = useState('SubMenu');
        const onClick = (e) => {
            console.log('click....', e);
            setCurrent(e.key);
            if(e.key==='profile'){
                  if (user.isAdmin) {
                    navigate("/admin");
                  } else {
                    navigate("/profile");
                  }
            }
            else if(e.key==='logout'){
                localStorage.removeItem("token");
                navigate("/login");
            }
        };

        const items = [       
            {
            label: 'VARSHA',
            icon: <UserOutlined />,
            key: 'SubMenu',          
            children: [
                {            
                    label: 'Profile',
                    key:'profile',
                    icon:<ProfileOutlined />,            
                },
                {            
                    label: 'Logout',  
                    key:'logout', 
                    icon:<LogoutOutlined />,             
                },
            ],
        },
        ];


        const getpresentUser = useCallback(async () => {
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
        },[dispatch, navigate]);

        useEffect(() => {
            const checkUserAuthentication = async () => {
                if (localStorage.getItem("token")) {
                    await getpresentUser();
                } else {
                    navigate("/login");
                }
            };
            checkUserAuthentication();
        },[getpresentUser, navigate]);

   

        return(
                user && 
        <div style={{padding:"1px", backgroundColor:"#230303", position:"relative", width:"auto", height:"56px", display:"block"}}>
             <div style={{margin:"auto", display:"flex", justifyContent:"space-between"}}>
                    <span style={{color:"white", padding:"4px", paddingLeft:"10px", fontSize:"30px", fontWeight:"bolder"}} onClick={() => navigate("/")} >Cine Sync</span>
                    <Menu className="ant-menu-submenu-selected" style={{left:"0", width:"10rem", height:"3.3rem", backgroundColor:"#230303",color:"white", marginTop:"4px", fontSize:"16px", fontWeight:"bolder"}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />                   
             </div>             
            <div style={{padding:"5px", paddingLeft:"10px", left:"0", display:"flex",  alignContent:"start", alignItems:"center", fontSize:"16px",  fontStretch:"extra-condensed", backgroundColor:"#d2cabc26",  width:"auto", height:"6vh", position:"relative"}}>
                    <span style={{marginRight: "20px"}}> Movies </span>
                    <span style={{marginRight: "20px"}}> Theatre List </span>
                    <span style={{marginRight: "20px"}}> My Bookings </span>
                    <span style={{marginRight: "20px"}}> Offers & Promotions </span>                                                            
            </div>            
            <div style={{padding:"10px", backgroundColor:"#e7eaed1f"}}>{children}</div>
      </div>
     )}

    export default ProtectedRoute;