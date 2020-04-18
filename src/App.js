import React from "react";
import "./App.css";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./Pages/Content";
import Artikel from "./Pages/Artikel";
import Detail from "./Pages/Detail";
import Portofolio from "./Pages/ContentPortofolio";
import Contact from "./Pages/Contact";
import Hire from "./Pages/hire";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artikel" component={Artikel} />
        <Route exact path="/artikel/:id" component={Detail} />
        <Route exact path="/portofolio" component={Portofolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/hire" component={Hire} />
      </Switch>
    </Router>
  );
}

export default App;
