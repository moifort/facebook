import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'
import './Ad.css'

const image = [
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    }
]

export default class About extends Component {
    render() {
        return (
            <div className="card ad">
                <div className="card-block">
                    <h6>Sponsored</h6>
                    <div className="photos">
                        <Gallery images={image} enableImageSelection={false} rowHeight={200}
                                 enableLightbox={false}/>
                    </div>
                    <p><strong>It might be time to visit Iceland.</strong> Iceland is so chill, and everything looks
                        cool here. Also, we heard the people are pretty nice. What are you waiting for?</p>
                    <button type="button" className="btn btn-outline-primary">See me</button>
                </div>
            </div>
        );
    }
}

