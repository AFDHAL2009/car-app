import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {About } from './about'
function App() {
  return (
    <div>
 <Link to="/About">About</Link>
 <h2>Github Pages</h2>
 <h3>Deploying React to Github1</h3>
 </div>
    );

}

export default App;
