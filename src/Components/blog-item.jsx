import { Link } from "react-router-dom";

const BlogItems = ({ blog, title }) => {
    // const blogs = props.blog
    return ( 
        <div className="list-items">
            <h2> { title } </h2>

            {blog.map((blogs) => (
            <div className="blog-item" key={blogs.id}>
                <ul className="list-group list-group-flush">
                    <li className="item list-group-item rounded   m-1 ">
                        <Link to={`/blogs/ ${blogs.id}  `}>
                            <h2 className='header'>{ blogs.title }</h2>
                            <p>Written by { blogs.author } </p>
                        </Link>
                    </li>
                </ul>
            </div>
        ))}
        </div>
        
     );
}
 
export default BlogItems;