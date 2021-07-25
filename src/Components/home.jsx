import React from 'react'
import BlogItems from './blog-item';
import useFetch from './useFetch';

const Home = () => {

    const {data, pending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="container">
            { error && <div>{error}</div> }
            { pending && <div>Loading...</div> }
            {data && <BlogItems blog={ data }  />}
        </div>
     );
}
 
export default Home;