import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    const [count2] = useState(2);

    console.log(props);

    const { name, location }  = props;

    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count : {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : varshakhatwani013@gmail.com</h4>
        </div>
    )
}

export default User;