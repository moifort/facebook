import React, {Component} from 'react'
import './Profile.css'
import totoro from '../todelete/totoro.jpeg'


export default class Profile extends Component {
    render() {
        return (
            <div className="card profile">
                <div className="card-img-top background-image"/>
                <div className="card-block">
                    <img className="profile-image rounded-circle" src={totoro} alt="Thibaut Mottet"/>
                    <h6 className="card-title">Thibaut Mottet</h6>
                    <p className="card-text">Here how I am in few words: I love potatoes and stuff...</p>
                    <ul className="profile-numbers">
                        <li className="profile-number">
                            Friends
                            <h6>367</h6>
                        </li>
                        <li className="profile-number">
                            Post
                            <h6>723</h6>
                        </li>
                        <li className="profile-number">
                            Photos
                            <h6>45</h6>
                        </li>
                    </ul>
                    <p className="card-text">
                        <small className="text-muted">Last post 3 mins ago</small>
                    </p>
                </div>
            </div>
        );
    }
}

