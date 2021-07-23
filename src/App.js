import Navbar from './Components/Navbar';
import Home from './Components/home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div>
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
