const BlogItems = ({ blog, title }) => {
    // const blogs = props.blog
    return ( 
        <div className="list-items">
            <h2> { title } </h2>
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
 
export default BlogItems;