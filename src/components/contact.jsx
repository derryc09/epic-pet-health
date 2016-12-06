import React from "react";
import ReactDOM from 'react-dom';
import "whatwg-fetch";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    componentDidMount(){

        $('select').material_select();
        $('input#input_text, textarea#textarea1').characterCounter();
        
    }

    render() {


        return (

             <div className="row contact-form">
                <div className="row">
                    <div className="input-field col s6">
                    <input defaultValue="" id="first_name2" type="text" className="validate"/>
                    <label className="" htmlFor="first_name2">First Name</label>
                    </div>
                </div>
          
             </div>
        
        );
    }
}