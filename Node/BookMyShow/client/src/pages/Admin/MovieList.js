import { Button, Flex, message,Table } from "antd";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import moment from "moment";

import { ShowLoading, HideLoading } from "../../redux/loadersSlice";
import { DeleteMovie, GetAllMovies } from "../../apicalls/movies";
import MovieForm from "./MovieForm";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function MovieList(){

    const [movies, setMovies] = React.useState([]);
    const [ShowMovieFormModal, setShowMovieFormModal] = useState(false);
    const [formType, setFormType] = useState("add");
    const [selectedMovie, setSelectedMovie] = useState(null);
    const dispatch = useDispatch();

    const getData = async() =>{
        try {
            dispatch(ShowLoading());
            const response = await GetAllMovies();
            if(response.success){
                setMovies(response.data);
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

    const handleDelete = async (movieId) =>{
        try {
            console.log(movieId);
            dispatch(ShowLoading());
            const response = await DeleteMovie({movieId});
            if(response.success){
                message.success(response.message);
                getData();
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

    const columns = [
        {
            title: "Poster",
            dataIndex: "poster",         
            render:(text, record) =>{
                return(
                    <img src={record.poster} 
                         alt={record.title} 
                         height="70" width="80" style={{"borderRadius": "4px"}} /> 
                );
            },
        },
        {
            title: 'Name',
            dataIndex: 'title',    
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title:"Genre",
            dataIndex:"genre",
        },
        {
            title:"Language",
            dataIndex:"language",        
        },
        {
            title:"Release Date",
            dataIndex:"releaseDate",
            render:(text, record) =>{
                return moment(record.releaseDate).format("DD-MM-YYYY");
            },
        },
        {
            title:"Action",
            dataIndex:"action",
            render:(text,record)=>{
                 return (
                <div>               
                    <EditOutlined style={{cursor:"pointer", color:"darkblue", fontSize:"16px"}} onClick={()=>{
                        setSelectedMovie(record);
                        setFormType("edit"); 
                        setShowMovieFormModal(true);                       
                    }} /> &nbsp;
                     <DeleteOutlined style={{cursor:"pointer", color:"red", fontSize:"16px"}} onClick={() => {
                        handleDelete(record._id);
                    }}/> 
                </div>
                 )
            }            
        }
    ];

    useEffect(()=>{
        getData();
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    //const [size, setSize] = useState('large'); // default is 'middle'
    return(
        <>
                <Flex gap="small" style={{"float":"right", "marginBottom":"1rem"}} wrap="wrap">
                    <Button type="default" size='medium' onClick={()=>{
                        setShowMovieFormModal(true);
                        setFormType("add");
                    }}>
                        Add Movie
                    </Button>
                </Flex>
                <Table dataSource={movies} columns={columns} />

                {ShowMovieFormModal && ( 
                    <MovieForm ShowMovieFormModal={ShowMovieFormModal}
                               setShowMovieFormModal =  {setShowMovieFormModal}
                               formType={formType}
                               selectedMovie={selectedMovie}
                               setSelectedMovie={setSelectedMovie}
                               getData={getData} /> 
                )}
        </>
    )
}