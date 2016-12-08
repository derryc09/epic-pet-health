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
        $('#textarea1').val('New Text');
        $('#textarea1').trigger('autoresize');
    }

    render() {


        return (

             <div className="row contact-form">
                    <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label className = "active" htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label className = "active" htmlFor="icon_prefix">Last Name</label>
                        </div>                        
                        <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate"/>
                        <label className = "active" htmlFor="icon_telephone">Telephone</label>
                        </div>

                        <div className="input-field col s6">
                        <i className="material-icons prefix">email</i>
                        <input id="icon_email" type="tel" className="validate"/>
                        <label className = "active" htmlFor="icon_email">Email</label>
                        </div>  

                        <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" length="120"></textarea>
                            <label className="active" htmlFor="textarea1">Textarea</label>
                        </div>
                        </div>                        

               
                    </div>
                    </form>
        
          
             </div>
        
        );
    }
}