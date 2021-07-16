import React from "react";

const Navbar = () => {
    return ( 
       <nav className="navbar">
           <h1>Datamob blog</h1>
           <div>
               <a href="/" className="list-items">Home</a>
               <a href="/startBlog" className="list-items">Write</a>
           </div>
       </nav>
     );
}
 
export default Navbar;