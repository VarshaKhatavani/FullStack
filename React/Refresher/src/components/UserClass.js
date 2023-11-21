import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        // multiple state variables
        this.state = {
            count : 0 ,
            count2 : 2 ,
        }
        console.log('Child Constructor');
    }  
    
    componentDidMount(){
        console.log('Child DidMount');
    }

    render(){
        console.log('Child Render');
    // destructuring 
     const {count, count2} = this.state;
     const {name, location} = this.props;

      return  <div className="user-card">
            <h1>Count : {count}</h1>   {/* {this.state.count}*/}
            <h1>Count2 : {count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count + 1,
                });
            }}>
            Increase Count
            </button>
            <h2>Name : {name}</h2>     {/* {this.props.name}*/}
            <h3>Location : {location}</h3>
            <h4>Contact : varshakhatwani013@gmail.com</h4>
        </div>
    }

}

export  default UserClass ;