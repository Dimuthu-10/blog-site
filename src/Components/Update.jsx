import React from "react";
import { useState } from "react";
import { useHistory,useParams } from "react-router-dom";


const Update = () => {

    const [title, SetTitle] = useState('');
    const [body, SetBody] = useState('');
    const [author, SetAuthor] = useState('Dimuthu');
    const [pending, setPending] = useState(false);
    const history = useHistory();
    const { id } = useParams();
    
    const handleUpdate = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        setPending(true);

        fetch(`http://localhost:8000/blogs/${id}`,{
            method : 'PUT',
            headers : {"Content-type":"application/Json"},
            body : JSON.stringify(blog)
        })
        .then(() =>{
            console.log('data added successfully.');
            setPending(false);
            history.push("/");
        })
        console.log({blog});
    }
   
    return ( 
        <div className="create container-lg">
            <div className="row">
                <form onSubmit={handleUpdate} >
                    <div className="form-group mb-3 k">
                        <label className="title form-label p-2 " htmlFor="Title">Title</label>
                        <input 
                            className=" form-control " 
                            type="text" 
                            required
                            value = {title}
                            onChange = { (e) => SetTitle(e.target.value) } 
                        />
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="title form-label p-2 " htmlFor="Content">Content</label>
                        <textarea 
                            className="field form-control" 
                            name="content" 
                            required cols="30" rows="7"
                            value = {body}
                            onChange = {(e) => SetBody(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="title form-label p-2 " htmlFor="Author">Author</label>
                        <select 
                            className=" form-select"
                            value = {author}
                            onChange = {(e) => SetAuthor(e.target.value) }
                        >
                            <option value="Dimuthu">Dimuthu</option>
                            <option value="Ashen">Ashen</option>
                        </select>
                    </div>
                   
                    <div className=" d-flex justify-content-center"> 
                        {!pending && <button type="submit" className="mt-3 btn btn-dark" >Update Blog</button>}
                        {pending && <button disabled className="mt-3 btn btn-dark" >Updating...</button>}
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default Update;