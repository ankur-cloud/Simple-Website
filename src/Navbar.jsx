import React from 'react';
import {NavLink} from 'react-router-dom';




const Navbar = () => {
    return ( <>
        <div className = "container-fluid nav_bg" >
       
        <div className = "row" >
         <div className = "col-10 mx-auto" >
            

       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">  Restarant</NavLink>
                            
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
                            </button>
                            
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    
        <li className="nav-item">
          <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/Services">Services</NavLink>
                                    </li>
                                     
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/About">About</NavLink>
                                    </li>
                                    
        <li className="nav-item">
          <NavLink activeClassName='menu_active' className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        {/* <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div > </div > </div > </>
    );
}

export default Navbar;
