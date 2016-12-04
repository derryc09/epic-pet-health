import React from "react";
import ReactDOM from 'react-dom';

import "whatwg-fetch";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {


        return (
            <div className="about">
            
                <p>FAQ</p>
                
                <div className="container">
                    <ul className="collapsible" data-collapsible="accordion">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}