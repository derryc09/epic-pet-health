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

            
             <div className="row contact-form">



         <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3"/>
                <label className="mdl-textfield__label" htmlFor="sample3">First Name</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="sample3"/>
                <label className="mdl-textfield__label" htmlFor="sample3">Last Name</label>
            </div>            
        </form>
        </div>
        
        );
    }
}