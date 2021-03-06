import React from "react";
import Image from "/Software_root/React/blog/src/Img/datamob.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container-fluid">
               {/* brand name and Icon */}
                <a className="navbar-brand " href="/">
                    <img src={Image} alt="datamob" width="50" height="50"/>
                    <span className="h2 m-2" >DataMob</span> 
                </a>

                {/* responsive button for small displays */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* nav Items */}
                <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item " >
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="nav-link " to="/newBlog">Write</Link>
                        </li>
                    </ul>
                </div>
                {/* search box */}
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-sm btn-outline-secondary" type="submit">Search</button>
                </form> */}
           </div>
           
       </nav>
     );
}

export default Navbar;