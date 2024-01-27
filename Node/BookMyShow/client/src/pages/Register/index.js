import React from "react"
import { Button, Form, Input } from "antd"
import backgroundImage from "../../images/login-bg.jpg"

const onFinish = (values) =>{
    console.log('Success:',values);
}

const onFinishFailed = (errorInfo) =>{
    console.log('error:',errorInfo);
}

export default function Register(){
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
                style={{ maxWidth: 800, border:"1px solid", padding:"4rem 6rem", background:"rgba(0,0,0,.75)", borderRadius:"5px" }}
                initialValues={{ remember: true, }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
             >
                 <span style={{ fontWeight:"bolder", fontSize:"28px", padding:"0rem 1rem 1rem 0rem", justifyContent:"center", display:"block", color:"white" }}>Sign Up</span>
                    
                    <Form.Item 
                        name="name"
                        rules={[{
                                    required: true,
                                    message: 'Please enter your name!',
                                },]}                        
                    >
                    <Input style={{padding:"12px", width:"17rem" }} placeholder='Enter Name' />
                    </Form.Item>
                    <Form.Item 
                        name="useremail"
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
                        Sign Up
                    </Button>
                    </Form.Item>                    
        </Form>
        </div>
        </>
    )
}