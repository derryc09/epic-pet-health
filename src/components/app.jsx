import React from "react";
import{Link, IndexLink} from "react-router";
//import {store} from "./shared-state.js";


export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
                    $(".button-collapse").sideNav();
                    $(".dropdown-button").dropdown({hover: true}); 
    }

    render() {
        return (
                
            <div>
                   
                <div className="navbar-fixed test">
                    <nav className="nav-extended">
                        <div className="nav-wrapper">
                        <IndexLink to="/" className="brand-logo" activeClassName="active">
                            <img src="../img/logos/eph-logo.png" alt="Epic Pet Health Logo" height="10%" width="auto"/>
                        </IndexLink>

                       
                        
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/about" 
                                            activeClassName="active">About</Link></li>
                            <li><a href="https://epic-pet-health.myshopify.com/" target="_blank">Shop</a></li>
                            <li><Link to="/faq" 
                                            activeClassName="active">FAQ</Link></li>
                            <li><Link to="/contact" 
                                            activeClassName="active">Contact Us</Link></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/about" 
                                            activeClassName="active">About</Link></li>
                            <li><a href="https://epic-pet-health.myshopify.com/">Shop</a></li>
                            <li><Link to="/faq" 
                                            activeClassName="active">FAQ</Link></li>
                            <li><Link to="/contact" 
                                            activeClassName="active">Contact Us</Link></li>
                            <li><a href="#">Search</a></li>
                            

                        </ul>


                        <ul className="tabs tabs-transparent">
                            
                                <li className="tab dropdown-button" data-activates="dropdown1">
                                
                                <Link to="/products" 
                                            activeClassName="active">Products</Link>
                                
                                    
                                </li>

 
                   
                            <li className="tab dropdown-button" data-activates="dropdown2">
                                <Link to="/awards" 
                                        activeClassName="active">Awards</Link>             
                            </li>

                            <li className="tab dropdown-button" data-activates="dropdown3">
                                
                                <Link to="/testimonials" 
                                        activeClassName="active">Testimonials</Link>
                               
                                
                            </li>

                        </ul>

 
                    
                        </div>
                    </nav>
                    </div> 




                    <main>
                        {this.props.children}
                    </main>







</div>
            


            );
        }
}

