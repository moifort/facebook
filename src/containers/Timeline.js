import React, {Component} from 'react'
import './Timeline.css'


export default class Timeline extends Component {
    render() {
        return (
            <div className="card timeline">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Message"/>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button"><i className="fa fa-camera"/></button>
                            </span>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Post</button>
                            </span>
                        </div>
                    </li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                </ul>
            </div>
        );
    }
}

