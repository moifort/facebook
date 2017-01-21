import React, {Component} from 'react';
import './Navbar.css'
import avatar from '../todelete/totoro.jpeg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse">
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><i className="fa fa-bandcamp" aria-hidden="true"></i></a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Message</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search..."/>
                            <div>
                                <i className="fa fa-bell-o fa-lg" aria-hidden="true"/>
                            </div>
                            <img src={avatar} alt="Thibaut Mottet" className="rounded-circle"/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

