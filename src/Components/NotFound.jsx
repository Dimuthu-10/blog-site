import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>OOPS!!! Sorry to say</h2>
            <h3>Error:404 </h3>
            <h3>Page Not Found</h3>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound
