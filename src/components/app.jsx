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
                            <li><a href="#">Shop</a></li>
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






    <footer className="page-footer">
        <div className="container">
          <div className="row">


            <div className="col s4">
              <h5 className="white-text">Location</h5>
              <p className="grey-text text-lighten-4">
                Epic Pet Health <br/>
                <a className="footer-link" href="http://maps.google.com/?q=3211 W McGraw #99092 Seattle, WA 98139" target="_blank">3211 W. McGraw #99092<br/>
                Seattle, WA  98139</a> <br/>
                
              </p>
            </div>
            <div className="col s4">
              <h5 className="white-text">Contact</h5>
              <p className="grey-text text-lighten-4">
                <a className="footer-link" href="mailto:info@EpicPetHealth.com" target="_top">info@EpicPet Health.com</a><br/>
                <a className="footer-link" href="tel:206-450-1118">(206) 450-1118</a><br/>
                <a className="footer-link" href="https://www.facebook.com/Epic-Pet-Health-279887328780587/" target="_blank"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a><span><a className="footer-link" href="https://twitter.com/epicpethealth" target="_blank"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></span>
                


              </p>
            </div>
            <div className="col s4">
              <h5 className="white-text">Company</h5>
              <p className="grey-text text-lighten-4">
              <a className="footer-link" href="#/about">About</a><br/>
              <a className="footer-link" href="https://epic-pet-health.myshopify.com/" target="_blank">Shop</a><br/>
              <a className="footer-link" href="#/faq">FAQ</a><br/>
              <a className="footer-link" href="#/contact">Contact Us</a>
              </p>
              <h5 className="white-text">Newsletter</h5>
              <a href="https://visitor.r20.constantcontact.com/manage/optin/ea?v=001-rR5XWQW7dOJ53DgWALv0B8t2EFtMBrpptbmlsQtd1LYqXciUTOcMXmSpkbt_nf89c0gE1y86GaPwMbFg6wyvBCNLqYcZSUs0cae6NUeQDyj5pkc29Sy8w5-I5jvuL_4951eHkjoVtWwUyGVUKLiRGk54jit4BuyIh-v5iupzzYjO38I4iwEicUzFpzzak8v"><p className="grey-text text-lighten-4 sign-up-here">
              Sign Up Here
              </p></a>
              
      <div className="input-field inline">
        <input id="email" type="email" className="validate" placeholder="email"/>
        <label htmlFor="email" data-error="wrong" data-success="right"></label>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
      </div>
  
              
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            &copy; Epic Pet Health 2014
            
          </div>
        </div>
      </footer>
</div>
            


            );
        }
}

