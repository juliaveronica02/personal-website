import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Content from './component/Content'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navbar/>
    <Content/>
      <Switch>
        <Route path="/home">
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
