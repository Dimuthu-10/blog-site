import React from 'react'
import { useState, useEffect } from 'react';
import BlogItems from './blog-item';

const Home = () => {

    const [blog,setBlog] = useState(null);

   
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBlog(data)
        })
    }, [])
   
    return ( 
        <div className="container">
           {blog && <BlogItems blog={ blog } title='All Blogs'  />}
        </div>
     );
}
 
export default Home;