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
        $('#textarea1').val('');
        $('#textarea1').trigger('autoresize');
    }

    render() {


        return (

             <div className="row contact-form">
                    <h2 className="centerTitle">Contact Us</h2>
                    <form className="col s12" method="post" action="mailto:derryc0907@gmail.com" >
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
                            <i className="material-icons prefix">comment</i>
                        
                            <textarea id="textarea1" className="materialize-textarea" ></textarea>
                            <label className="active" htmlFor="textarea1">Comments</label>
                        </div>
                        </div>      
                        <div className = "submitButton" type="submit" value="Send Email">                  
                        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>submit</a>
                        </div>
               
                    </div>
                    </form>
        
          
             </div>
        
        );
    }
}