import React from 'react';
import { Tabs } from 'antd';
import MovieList from './MovieList';

export default function Admin(){
    // const onChange = (key) => {
    //     console.log(key);
    // };

    const items = [
        {
            key: 'Movies',
            label: 'Movies',
            children: <MovieList/>,
        },
        {
            key: 'Theatres',
            label: 'Theatres',
            children: 'Theatres',
        }    
    ];

    return(
        <>
            {/* <PageTitle title="Admin" /> */}
            <Tabs defaultActiveKey="1" items={items}></Tabs>    {/*onChange={onChange}*/}      
        </>
    )
}