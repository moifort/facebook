import React, {Component} from 'react'
import PostMessage from './timeline/PostMessage'
import Message from './timeline/Message'
import MessageAction from './timeline/MessageAction'
import Comments from './timeline/Comments'
import AddComment from './timeline/AddComment'
import totoro from '../todelete/totoro.jpeg'
import aurore from '../todelete/aurore.jpg'
import other from '../todelete/aurore-01.jpg'
import './Timeline.css'


const comments = [
    {
        userName: "Thibaut Mottet",
        profileImage: totoro,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    },
    {
        userName: "Maxime Gellé",
        profileImage: aurore,
        comment: "Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum fauraesent commodo cursus magna..."
    }
]

const image = [
    {
        src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 271,
        thumbnailHeight: 320
    }
]

const images = [
    {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 183,
        caption: "37H (gratispgraphy.com)"
    },
    {
        src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 271,
        thumbnailHeight: 320,
        caption: "Orange Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "201H (gratisography.com)"
    }
]

export default class Timeline extends Component {
    render() {
        return (
            <div className="card timeline">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <PostMessage />
                    </li>
                    <li className="list-group-item message">
                        <Message userName="Thibaut Mottet"
                                 profileImage={totoro}
                                 postTime="4 min"
                                 message="Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                                 images={images}/>
                        <MessageAction />
                    </li>
                    <li className="list-group-item comments">
                        <Comments comments={comments}/>
                    </li>
                    <li className="list-group-item add-comment">
                        <AddComment userName="Thibaut Mottet"
                                    profileImage={totoro}/>
                    </li>
                    <li className="list-group-item message">
                        <Message userName="Maxime Gellé"
                                 profileImage={aurore}
                                 postTime="38 min"
                                 message="Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                        <MessageAction />
                        <Comments />
                    </li>
                    <li className="list-group-item add-comment">
                        <AddComment userName="Thibaut Mottet"
                                    profileImage={totoro}/>
                    </li>
                    <li className="list-group-item message">
                        <Message userName="Igor Lovich"
                                 profileImage={other}
                                 postTime="1h"
                                 message="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam."
                                 images={image}/>
                        <MessageAction />
                        <Comments />
                    </li>
                    <li className="list-group-item add-comment">
                        <AddComment userName="Thibaut Mottet"
                                    profileImage={totoro}/>
                    </li>
                </ul>
            </div>
        );
    }
}

