import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'
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
                                    <Gallery images={this.props.images}
                                             enableImageSelection={false}
                                             rowHeight={this.props.images.length > 1 ? 180 : 300}
                                             enableLightbox={true}/>
                                </div>)
                            : null
                    }
                </div>
            </div>
        );
    }
}

