import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogRead = () => {

    const { id } = useParams();
    const { data: blog, error , pending} = UseFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div>
            <h2>This is a body of { id } blog</h2>
            { pending && <div>Loading...</div> }
            { error && <div> { error } </div>}
            { blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <div> { blog.body } </div>
                    <p>Written by { blog.author } </p>
                </article>
            )}
        </div>
     );
}
 
export default BlogRead;