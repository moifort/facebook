import React, {Component} from 'react'
import './Comment.css'


export default class Message extends Component {
    render() {
        return (
            <div className="comment">
                <img className="comment-profile-image rounded-circle" src={this.props.profileImage} alt={this.props.userName}/>
                <p><strong>{this.props.userName}:</strong> {this.props.comment}</p>
            </div>
        );
    }
}

