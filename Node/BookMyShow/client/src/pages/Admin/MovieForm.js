import { Button, Col, ConfigProvider, DatePicker, Form, Input, InputNumber, Modal, Row, Select, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { useDispatch } from "react-redux";
import { AddMovie, UpdateMovie } from "../../apicalls/movies";
import locale from 'antd/locale/en_US';
import dayjs from 'dayjs';

export default function MovieForm({formType, ShowMovieFormModal, setShowMovieFormModal, selectedMovie, setSelectedMovie, getData}){

    const dispatch = useDispatch();
    const [confirmLoading, setConfirmLoading] = useState(false);    

    const onFinish = async(values)=>{
        try {
            console.log('on finish called')
            console.log('Form values:', values);
            values.releaseDate = selectedDate.format('YYYY-MM-DD'); 
            dispatch(ShowLoading());
            let response = null ;
            if(formType === "add"){
                console.log(formType);
                response = await AddMovie(values);
                console.log(response);
            }else{
                response =  await UpdateMovie({
                    ...values,                    
                    movieId:selectedMovie._id,
                })
                console.log(response);
            }

            if(response.success){
                getData();
                message.success(response.message);
                //setShowMovieFormModal(false);
                setConfirmLoading(true);
                setTimeout(() => {
                    setShowMovieFormModal(false);
                    setConfirmLoading(false);
                }, 1000);
            }
            else{
                message.error(response.message);
            }
            dispatch(HideLoading());    
        } catch (error) {
             dispatch(HideLoading());
             message.error(error.message);
        }        
     }

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setShowMovieFormModal(false);
        setSelectedMovie(null);
    };

//     const handleOk = () => {       
//         setConfirmLoading(true);
//         setTimeout(() => {
//             setShowMovieFormModal(false);
//             setConfirmLoading(false);
//         }, 2000);
//   };

    const [selectedDate , setSelectedDate] =  useState(selectedMovie ? dayjs(selectedMovie.releaseDate, 'YYYY-MM-DD') : dayjs());
    const handleDateChange = (date, dateString) =>{        
        console.log('Selected Date:', dateString);
        console.log(date);
        setSelectedDate(date);
    }

    return(
        <>
            <Modal
               title={formType === "add" ? "Add Movie" : "Edit Movie"}
                open={ShowMovieFormModal}               
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={600}
                footer={null}
            >            
            <Form
                labelCol={{ span: 14,}}
                wrapperCol={{ span: 24,}}
                layout="vertical"               
                style={{ maxWidth: 600,}}
                onFinish={onFinish}
                initialValues={selectedMovie}
                >
             
                <Form.Item label="Movie Name" name="title">
                    <Input />
                </Form.Item>
                
                <Form.Item label="Movie Description" name="description">
                    <TextArea rows={4} />
                </Form.Item>
                  
                
                <Form.Item label="Language" name="language">
                    {/* <Select> */}
                    {/* <Select.Option value="null">Select Language</Select.Option> */}
                     <Select name="" id="">
                        <Select.Option value="">Select Language</Select.Option>
                        <Select.Option value="Telugu">Telugu</Select.Option>
                        <Select.Option value="English">English</Select.Option>
                        <Select.Option value="Hindi">Hindi</Select.Option>
                        <Select.Option value="Tamil">Tamil</Select.Option>
                    </Select>
                    {/* </Select> */}
                </Form.Item>    
                   <Row gutter={16}> 
                     <Col span={8}>
                        <Form.Item label="Release Date"  name="releaseDate">     
                           <ConfigProvider locale={locale}>                  
                                <DatePicker defaultValue={selectedDate}  
                                    onChange={handleDateChange} 
                                    format="YYYY-MM-DD" />                       
                           </ConfigProvider>     
                        </Form.Item>
                    </Col>    
                    <Col span={12}>
                         <Form.Item label="Duration (In Minutes)" name="duration">
                            <InputNumber />
                        </Form.Item>
                    </Col>      
                    </Row>
                 <Form.Item label="Genre" name="genre">               
                    <Select name="" id="">
                        <Select.Option value="">Select Genre</Select.Option>
                        <Select.Option value="Action">Action</Select.Option>
                        <Select.Option value="Comedy">Comedy</Select.Option>
                        <Select.Option value="Drama">Drama</Select.Option>
                        <Select.Option value="Romance">Romance</Select.Option>
                    </Select>            
                </Form.Item>  
               
                <Form.Item label="Poster URL" name="poster">
                    <Input />
                </Form.Item>      

                <Form.Item>
                        <Button type="default" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>               
            </Modal>
        </>
    )
}