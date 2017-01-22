import React, {Component} from 'react'
import './Notification.css'


export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div className="notification">
                <div className={this.state.isToggleOn ? "dropdown show" : "dropdown"}>
                    <i className="fa fa-bell-o fa-lg" aria-hidden="true" onClick={this.handleClick}/>
                    <span className="badge badge-notify">328</span>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-item" href="#"><i className="fa fa-user-o fa-fw"></i><strong><a href="index.html#">Maxime Gellé</a></strong> followed you</div>
                        <div className="dropdown-item" href="#"><i className="fa fa-comment-o fa-fw"></i><strong><a href="index.html#">Igor Lovich</a></strong> comment your <a href="index.html#">post</a></div>
                        <div className="dropdown-item" href="#"><i className="fa fa-thumbs-o-up fa-fw"></i><strong><a href="index.html#">Igor Lovich</a></strong> like your <a href="index.html#">post</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
