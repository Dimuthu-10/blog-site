const NewBlog = () => {
    return ( 
        <div className="container-lg">
            <div className="row d-flex justify-content-center ">
                <form>
                    <div className="form-group mb-3 k">
                        <label className="form-label" htmlFor="Title">Title</label>
                        <input className="form-control w-50 justify-content-center" type="text" required />
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="form-label" htmlFor="Content">Content</label>
                        <textarea className="form-control w-50" name="content" required cols="30" rows="5"></textarea>
                    </div>

                    <div className="form-group mb-3 ">
                        <label className="form-label" htmlFor="Author">Author</label>
                        <select className="form-select w-50">
                            <option disabled selected>Choose Author</option>
                            <option value="Dimuthu">Dimuthu</option>
                            <option value="Ashen">Ashen</option>
                        </select>
                    </div>
                   
                    <div className="d-flex justify-content-center"> 
                        <button type="submit" className="mt-3 btn btn-dark" >Add Blog</button>
                    </div>
                    
                </form>
            </div>
        </div>
     );
}
 
export default NewBlog;