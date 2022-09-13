import React from "react"
import logo from "../logo.svg"
import "../styles/Banner.css"

const Header = () => {
 
  return (
    <header>
      <nav className="topnav">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <a href="" onClick={() => alert('hh')}>
          Home
        </a>
        <a href="" onClick={() => alert('hh')}>
          Station
        </a>
        <a href="" onClick={() => alert('hh')}>
          About
        </a>
        
      </nav>
    </header>
  )
}
export default Header
