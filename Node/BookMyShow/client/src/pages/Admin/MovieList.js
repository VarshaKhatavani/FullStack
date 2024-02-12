import { Button, Flex, message,Table } from "antd";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import moment from "moment";

import { ShowLoading, HideLoading } from "../../redux/loadersSlice";
import { GetAllMovies } from "../../apicalls/movies";

export default function MovieList(){

    const [movies, setMovies] = React.useState([]);

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
            dataIndex:"action"
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
                    <Button type="default" size='medium'>
                        Add Movie
                    </Button>
                </Flex>
                <Table dataSource={movies} columns={columns} />
        </>
    )
}