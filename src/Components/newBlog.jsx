import { useState } from "react";

const NewBlog = () => {

    const [title, SetTitle] = useState('');
    const [content, SetContent] = useState('');
    const [author, SetAuthor] = useState('');

    return ( 
        <div className="create container-lg">
            <div className="row">
                <form>
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
                            value = {content}
                            onChange = {(e) => SetContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="title form-label p-2 " htmlFor="Author">Author</label>
                        <select 
                            className=" form-select"
                            value = {author}
                            onChange = {(e) => SetAuthor(e.target.value) }
                        >
                            <option disabled selected>Choose Author</option>
                            <option value="Dimuthu">Dimuthu</option>
                            <option value="Ashen">Ashen</option>
                        </select>
                    </div>
                   
                    <div className=" d-flex justify-content-center"> 
                        <button type="submit" className="mt-3 btn btn-dark" >Add Blog</button>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default NewBlog;