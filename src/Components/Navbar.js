import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";   

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link> 

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> 
            </li>

          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          </form>
            {/* <button className="btn btn-outline-danger" type="submit">Search</button> */}

          <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable to dark</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
}

Navbar.defaultPros = {
  title: 'title is here ',
  aboutus: 'About'
}
