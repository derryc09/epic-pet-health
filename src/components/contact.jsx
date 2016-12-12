import React from "react";
import ReactDOM from 'react-dom';
import "whatwg-fetch";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        Materialize.updateTextFields();
        $('select').material_select();
        $('input#input_text, textarea#textarea1').characterCounter();
        $('#textarea1').val('');
        $('#textarea1').trigger('autoresize');
    }
    submitEmail(){
          Materialize.toast('Request submitted', 20000) 
    }

    render() {
        return (
            <div className="row contact-form">
                <h2 className="centerTitle">Contact Us</h2>
                <form className="col s12" action="https://formspree.io/dcstackoverflow@gmail.com"
                    method="POST" >
                    <div className="row">
                         <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" name="FirstName"/>
                             <label className = "active" htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" name="LastName"/>
                            <label className = "active" htmlFor="icon_prefix">Last Name</label>
                        </div>                        
                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate" name="phone"/>
                            <label className = "active" htmlFor="icon_telephone">Telephone</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_email" type="tel" className="validate" name="_replyto"/>
                            <label className = "active" htmlFor="icon_email">Email</label>
                        </div>  
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">comment</i>
                                <textarea id="textarea1" className="materialize-textarea" name="Message"></textarea>
                                <label className="active" htmlFor="textarea1">Comments</label>
                            </div>
                        </div>
                        <div className = "submitButton waves-effect waves-light btn" onClick={this.submitEmail}>    
                            <input type="submit" value="Send"/>
                            <i className="material-icons left">cloud</i>
                        </div>
                        <input type="hidden" name="_next" value="/#/contact" />
                    </div>
                </form>
            </div> 
        );
    }
}