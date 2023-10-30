import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return <div>
      <h1>About Us </h1>  
      <User name={"Varsha Khatavani (Functional component)"} location={"Pune"} />
      <UserClass  name={"Varsha Khatavani (Class component)"} location={"Navsari"}/>
    </div>
}

export default About ;