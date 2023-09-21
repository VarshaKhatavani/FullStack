import './App.css';
import Ueffect from './components/ueffect';
import UserProfile from './components/userProfile';
import UseOfObject from './components/useOfObject';


function App() {
  return (
    <>
   <h1>Hello, Varsha! Welcome to first React App!</h1>
   <Ueffect/>
   <UserProfile name="varsha" age="30" Occupation="Software Development Engineer 2"/>
   <UserProfile name="Ridhaan" age="30" Occupation="Software Tester"/>
   <UseOfObject/>
   </>
  );
}

export default App;
