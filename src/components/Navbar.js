import React from "react";
import logo from "../assets/images/Devisionary.svg";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
        
            
        
      <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
        </div>
        

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"> <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} /></span></button>
        
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            
          <ul class="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">how work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">portfolio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">contacts</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
