import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}style={{ width: '100%',display: 'block !important' }}>
  
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
      
       
      </ul>
    
<div class="form-check form-switch form-check-reverse">
  <label class="form-check-label" for="flexSwitchCheckReverse">Enable{props.mode==='light'?'dark':'light'}Mode</label>
  <input class="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckReverse"/>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes=
{
title:PropTypes.string.isRequired,
aboutText:PropTypes.string

}
Navbar.defaultProps=
{
title :'App'
};

