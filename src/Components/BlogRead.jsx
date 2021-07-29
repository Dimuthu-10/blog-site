import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogRead = () => {

    const { id } = useParams();
    const { data, error , pending} = UseFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div>
            { pending && <div>Loading...</div> }
            { error && <div> { error } </div>}
            { data && (
                <article>
                    <h2> { data.title } </h2>
                    <div> { data.body } </div>
                    <p>Written by { data.author } </p>
                </article>
            )}
        </div>
     );
}
 
export default BlogRead;