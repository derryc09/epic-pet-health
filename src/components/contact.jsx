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
             <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate"></input>
                            <label for="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate"></input>
                            <label htmlFor="icon_telephone">Telephone</label>
                        </div>
                    </div>
                </form>
            </div>
        
        );
    }
}