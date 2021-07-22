import React from 'react'
import { useState } from 'react';
import BlogItems from './blog-item';

const Home = () => {

    const [blog,setBlog] = useState([
        {title: 'First Blog', body:'this is the blog body of the first blog', author: 'Dimuthu', id:1},
        {title: 'Second Blog', body:'this is the blog body of the Second blog', author: 'Lakshan' ,id:2},
        {title: 'Third Blog', body:'this is the blog body of the Third blog' ,author: 'Ashen', id:3}
    ]);
   
    return ( 
        <div className="container">
           <BlogItems blog={ blog } title='All Blogs'/>
        </div>
     );
}
 
export default Home;