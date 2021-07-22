import React from 'react'
import { useState } from 'react';

const Home = () => {

    const [blog,setBlog] = useState([
        {title: 'First Blog', body:'this is the blog body of the first blog', author: 'Dimuthu', id:1},
        {title: 'Second Blog', body:'this is the blog body of the Second blog', author: 'Lakshan' ,id:2},
        {title: 'Third Blog', body:'this is the blog body of the Third blog' ,author: 'Ashen', id:3}
    ]);
   
    return ( 
        <div className="container">
           {blog.map((blogs) => (
               <div className="blog-item" key={blogs.id}>
                   <ul className="list-group list-group-flush">
                       <li className=" item list-group-item    m-1 ">
                            <h2 className='header'>{ blogs.title }</h2>
                            <p>Written by { blogs.author } </p>
                       </li>
                   </ul>
               </div>
           ))}
        </div>
     );
}
 
export default Home;