import React, {Component} from 'react'
import './Alert.css'


export default class Alert extends Component {
    render() {
        return (
            <div className="app-alert alert alert-success" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Well done!</strong> You successfully read this important alert message.
            </div>
        );
    }
}

