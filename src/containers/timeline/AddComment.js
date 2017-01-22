import React, {Component} from 'react'
import './AddComment.css'


export default class AddComment extends Component {
    render() {
        return (
            <div className="add-comment">
                <img className="comment-profile-image rounded-circle" src={this.props.profileImage}
                     alt={this.props.userName}/>
                <div className="post">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your comment"/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Post</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

