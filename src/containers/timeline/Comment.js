import React, {Component} from 'react'
import './Comment.css'


export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <img className="comment-profile-image rounded-circle" src={this.props.profileImage}
                     alt={this.props.userName}/>
                <div className="comment-text">
                    <p><strong>{this.props.userName}:</strong> {this.props.comment}</p>
                    <div className="action"><a href="#">Like</a> · 10 min</div>
                </div>
            </div>
        );
    }
}

