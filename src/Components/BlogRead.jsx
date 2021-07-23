import { useParams } from "react-router-dom";

const BlogRead = () => {

    const { id } = useParams();

    return ( 
        <div>
            <h2>Blog Read - { id }</h2>
        </div>
     );
}
 
export default BlogRead;