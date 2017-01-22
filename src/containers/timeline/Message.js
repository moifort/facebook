import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'
import Comment from './Comment'
import './Message.css'

export default class Message extends Component {
    render() {
        return (
            <div className="message">
                <img className="profile-image rounded-circle" src={this.props.profileImage} alt={this.props.userName}/>
                <div className="text">
                    <small className="pull-right">{this.props.postTime}</small>
                    <h6>{this.props.userName}</h6>
                    <p> {this.props.message}</p>
                    {
                        this.props.images
                            ? (
                                <div className="photos">
                                    <Gallery images={this.props.images} enableImageSelection={false} rowHeight={180}
                                             enableLightbox={true}/>
                                </div>)
                            : null
                    }

                    {
                        this.props.comments
                            ? (<ul>
                                {this.props.comments.map(function (comment, index) {
                                    return (
                                        <li key={index}>
                                            <Comment userName={comment.userName}
                                                     profileImage={comment.profileImage}
                                                     comment={comment.comment}/>
                                        </li>
                                    );
                                })}
                            </ul>)
                            : null
                    }
                </div>
            </div>
        );
    }
}

