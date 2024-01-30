import React from 'react';
import {Button, Form, Input, message } from 'antd';
import backgroundImage from '../../images/login-bg.jpg';
import {Link} from 'react-router-dom';
import axios from 'axios';

const onFinish = async (values) =>{
    try {        
            console.log('Success:',values);
            const response = await axios.post('http://localhost:5001/api/users/login',values,{
                headers : {
                    'Content-Type':'application/json'
                }
            });
            console.log(response);
            const res = response.data ;
            if(res.success){
                message.success(res.message);
            }
            else{
                message.error(res.message);
            }           
    } catch (error) {
            message.error(error.message);
    }
}

const onFinishFailed = (errorInfo) =>{
    console.log('error:',errorInfo);
}

export default function Login(){
    return(
            <>
            <div style={{ border: "1px solid grey", 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          minHeight: '99vh',
                          backgroundImage : `url(${backgroundImage})`,
                          backgroundSize:'cover',                     
                        }}>
             <Form name="basic"                                 
                labelCol={{
                    span: 16,
                }}
                style={{ maxWidth: 800, border:"1px solid", padding:"6rem", background:"rgba(0,0,0,.75)", borderRadius:"5px" }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
             >
                 <span style={{ fontWeight:"bolder", fontSize:"28px", padding:"0rem 1rem 1rem 0rem", justifyContent:"center", display:"block", color:"white" }}>Sign In</span>
                    <Form.Item 
                        name="email"
                        rules={[{
                                    required: true,
                                    message: 'Please enter your email!',
                                },]}                        
                    >
                    <Input style={{padding:"12px", width:"17rem" }} placeholder='Enter Email' />
                    </Form.Item>

                    <Form.Item                        
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter your password!',
                            },
                        ]} >
                    <Input.Password style={{padding:"12px", width:"17rem" }} placeholder='Enter Password' />
                    </Form.Item><br/>
                    
                    <Form.Item
                        wrapperCol={{
                            offset: 0, // like margin left 
                            span: 24,                
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{ width:"100%", height:"45px", fontWeight:"bold", backgroundColor:"rgb(229, 9, 20)" }}>
                            Sign In
                        </Button>
                    </Form.Item>
                    <span style={{ color:"grey", fontSize:"15px"}}>New to BookMyShow? &nbsp;
                    <Link to="/register" style={{ color:"white" }}>
                        Sign up now
                    </Link>
                    </span>
        </Form>
        </div>
        </>
    )    
}