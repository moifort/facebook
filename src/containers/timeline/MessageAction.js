import React, {Component} from 'react'
import './MessageAction.css'

export default class MessageAction extends Component {
    render() {
        return (
            <div className="message-action">
                <button type="button" className="btn btn-outline-primary"><i className="fa fa-thumbs-o-up" />Like</button>
            </div>
        );
    }
}

