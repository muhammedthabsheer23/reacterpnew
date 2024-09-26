import React from 'react'
import 'bootstrap/js/dist/dropdown'

function Navbar({Toggle}) {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">

    <i className="navbar-brand bi bi-justify-left fs-4 "onClick={Toggle} ></i>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2  mt-lg-0">
       
     
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="dropdownId"
           data-bs-toggle="dropdown" aria-haspopup='true' aria-expanded="false">
          YOUSAF
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownId">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Setting</a></li>
            
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>

      </ul>
      
    </div>

</nav>
    </div>
  )
}

export default Navbar