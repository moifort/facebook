import React, {Component} from 'react'
import Notification from './Notification'
import './Navbar.css'
import avatar from '../todelete/totoro.jpeg'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse">
                <div className="container">
                    <a className="navbar-brand" href="#"><i className="fa fa-facebook-f"/></a>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search..."/>
                            <Notification />
                            <img src={avatar} alt="Thibaut Mottet" className="rounded-circle"/>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

