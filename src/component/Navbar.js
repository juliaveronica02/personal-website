import React, {Component} from 'react'
// import './navbar.css';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary">
            <Link className="navbar-brand" href="#">Julia Veronica</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="container">
              <ul className="navbar-nav text-danger ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/artikel">Artikel</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portofolio">Portofolio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item ">
                  <button className='btn btn-outline-danger'>
                  <Link className="nav-link" to="/hire">Hire</Link>
                  </button>
                </li>
              </ul>
              </div>
            </div>
          </nav>
        )
    }
}
