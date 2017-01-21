import React, {Component} from 'react'
import './About.css'


export default class About extends Component {
    render() {
        return (
            <div className="card about">
                <div className="card-block">
                    <h6>About
                        <small> · <a href="#">Edit</a></small>
                    </h6>
                    <ul className="information">
                        <li><i className="fa fa-globe fa-fw"></i>Went to <a href="index.html#">Kiilopaa, Finland</a>
                        </li>
                        <li><i className="fa fa-address-book-o fa-fw"></i>Recently friends with <a href="index.html#">Maxime</a>
                        </li>
                        <li><i className="fa fa-building fa-fw"></i>Worked at <a href="index.html#">Arolla</a>
                        </li>
                        <li><i className="fa fa-home fa-fw"></i>Lives in <a href="index.html#">Paris, France</a>
                        </li>
                        <li><i className="fa fa-map-marker fa-fw"></i>From <a href="index.html#">Paris, France</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

