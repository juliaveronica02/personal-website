import React from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Pages/Content';
import Portofolio from './Pages/ContentPortofolio';
import Contact from './Pages/Contact';

function App() {
    return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/portofolio" component={Portofolio}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </Router>
    )
}

export default App;
