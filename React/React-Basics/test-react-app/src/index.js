import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// old method to render over DOM

// const App = () => {
//   return <h1>Hello, React!</h1>;
// }
//ReactDOM.render(<App1/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)