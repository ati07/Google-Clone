import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearachPage'

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/search">
            {/* <h1>This i sthe search page hold on...</h1> */}
            <SearchPage />
            
          </Route>




        </Switch>


      </Router>
    </div>
  );
}

export default App;
