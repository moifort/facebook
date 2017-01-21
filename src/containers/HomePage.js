import React, {Component} from 'react'
import Profile from './Profile'
import About from './About'
import Photos from './Photos'
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="container home-page">
                <div className="row">
                    <div className="col-md-3">
                        <Profile />
                        <About />
                        <Photos />
                    </div>
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
        );
    }
}

