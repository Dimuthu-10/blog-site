import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./useFetch";

const BlogRead = () => {

    const { id } = useParams();
    const { data, error , pending} = UseFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();

    const clickHandle= () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: "DELETE",

        })
        .then(()=>{
            console.log('blog deleted');
            history.push('/');
        })
    }

    return ( 
        <div>
            { pending && <div>Loading...</div> }
            { error && <div> { error } </div>}
            { data && (
                <article className="container">
                    <h2> { data.title } </h2>
                    <div> { data.body } </div>
                    <br />
                    <p>Written by { data.author } </p>
                    <button onClick={clickHandle} >Delete Blog</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogRead;