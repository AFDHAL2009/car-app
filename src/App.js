import logo from './logo.svg';
import './App.css';

//import Home from "./components/Home"
import Header from "./components/Header"
//import About from "./components/About"
import NotMatch from "./components/NotMatch"
import SideBar from "./components/SideBar"
import Login from "./components/Login"
import Register from "./components/Register"
import Station from "./components/Station"
import {BrowserRouter,Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
function App() {
  return (
  <BrowserRouter>
 <Routes>
 <Route path="/" exact element={<Home/>} />
 <Route path="/home" element={<Home/>} />
 <Route path="/about" element={<About/>} />
 </Routes>
 </BrowserRouter>
    );

}

export default App;
