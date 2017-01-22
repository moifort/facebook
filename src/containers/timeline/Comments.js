import React, {Component} from 'react'
import Comment from './Comment'
import './Comments.css'

export default class Comments extends Component {
    render() {
        return (
            <div className="comments">
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
        );
    }
}

