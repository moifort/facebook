import React, {Component} from 'react';
import Navbar from './Navbar'
import Home from './HomePage'
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar className="fixed-top"/>
                <Home />
            </div>
        );
    }
}

