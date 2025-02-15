import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () =>{
//     return <div>
//       <h1>About Us </h1>  
//       <User name={"Varsha Khatavani (Functional component)"} location={"Pune"} />
//       <UserClass  name={"Varsha Khatavani (Class component)"} location={"Navsari"}/>
//     </div>
// }

class About extends Component{

    constructor(props){
        super(props);
        console.log('Parent Constructor') ;
    }

    componentDidMount(){
      console.log('Parent Component Did Mount');
    }

    render(){
       console.log('Parent Render') ;
        return(
          <div>
              <h1>About Us</h1>
              <div>
               LoggedInUser : {" "} 
               {/* Using Context API */}
               <UserContext.Consumer>
                {({loggedInUser})=>{
                  console.log(loggedInUser)
                  return <span className="font-semibold">{loggedInUser}</span>
                }}
               </UserContext.Consumer>
              </div>
              <UserClass name={"Varsha Khatavani(Class Component)"} location={"Navsari"} />
          </div>
        )
    }
}

export default About ;