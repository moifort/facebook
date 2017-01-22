import React, {Component} from 'react'
import './PostMessage.css'


export default class Post extends Component {
    render() {
        return (
            <div className="input-group post">
                <input type="text" className="form-control" placeholder="Message"/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button"><i className="fa fa-camera"/></button>
                </span>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Post</button>
                </span>
            </div>
        );
    }
}

