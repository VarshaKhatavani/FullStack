import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);        
        console.log('Child Constructor');

        this.state = {
            userInfo:{
                name : "Dummy",
                location : "Default",
            }
        };
    }  
    
    async componentDidMount(){
        console.log('Child DidMount');
        const data = await fetch("https://api.github.com/users/varsha0501");
        const json = await data.json();

        this.setState({
            userInfo:json,
        })

        console.log(json);        
    }

    render(){
        console.log('Child Render');
        // destructuring 
        const {name, location, avatar_url} = this.state.userInfo ;  // this.props;

        return  <div className="user-card"> 
                    <img src={avatar_url}/>
                    <h2>Name : {name}</h2>     {/* {this.props.name}*/}
                    <h3>Location : {location}</h3>
                    <h4>Contact : varshakhatwani013@gmail.com</h4>
                </div>
    }
}

export  default UserClass ;