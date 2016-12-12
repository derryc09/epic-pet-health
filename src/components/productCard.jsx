import React from "react";
import ReactDOM from 'react-dom';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Product: {this.state.name}</h4>
            </div>       
        );
    }
}