import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'
import './Photos.css'

const IMAGES = [
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
    },
    {
        src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Man on BMX (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 213,
        caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
    },
    {
        src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 257,
        thumbnailHeight: 320,
        caption: "A photo by 贝莉儿 NG. (unsplash.com)"
    }
]


export default class Photos extends Component {
    render() {
        return (
            <div className="card about">
                <div className="card-block">
                    <h6>Photos
                        <small> · <a href="#">Edit</a></small>
                    </h6>
                    <Gallery images={IMAGES} enableImageSelection={false} rowHeight={100} enableLightbox={false}/>
                </div>
            </div>
        );
    }
}

