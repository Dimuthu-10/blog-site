import Navbar from './Components/Navbar';
import Home from './Components/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewBlog from './Components/newBlog';
import BlogRead from './Components/BlogRead';



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/newBlog">
              <NewBlog/>
            </Route>
            <Route path="/blogs/:id">
              <BlogRead/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
