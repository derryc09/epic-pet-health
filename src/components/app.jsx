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
                               <img src="../../img/logos/eph-logo.png" alt=""/>
                            </IndexLink>

                       
                        
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/about" 
                                            activeClassName="active">About</Link></li>
                            <li><a href="#">Shop</a></li>
                            <li><Link to="/faq" 
                                            activeClassName="active">FAQ</Link></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/about" 
                                            activeClassName="active">About</Link></li>
                            <li><a href="#">Shop</a></li>
                            <li><Link to="/faq" 
                                            activeClassName="active">FAQ</Link></li>
                            <li><a href="#">Search</a></li>


                        </ul>


                        <ul className="tabs tabs-transparent">
                            
                                <li className="tab dropdown-button" data-activates="dropdown1">
                                
                                <Link to="/products" 
                                            activeClassName="active">Products</Link>
                                
                                    
                                </li>
                                <ul id="dropdown1" className="dropdown-content">
                                    <div className="nav-children">
                                    <li><Link to="/products" 
                                            activeClassName="active">Best-Sellers</Link></li>
                                    <li><Link to="/products" 
                                            activeClassName="active">Agility</Link></li>
                                    <li><Link to="/products" 
                                            activeClassName="active">Allegy</Link></li>     
                                    <li><Link to="/products" 
                                            activeClassName="active">Behavioral</Link></li>
                                    <li><Link to="/products" 
                                            activeClassName="active">Cat</Link></li>
                                    <li><Link to="/products" 
                                            activeClassName="active">Horse</Link></li>
                                    <li><Link to="/products" 
                                            activeClassName="active" onClick={() => this.horse()}>Prevention & Wellness</Link></li>
                                            <li className="divider" />
                                    <li><Link to="/products" 
                                            activeClassName="active" onClick={() => this.reset()}>All Products</Link></li>       
                                </div>
                                
                                </ul>
 
                   
                            <li className="tab dropdown-button" data-activates="dropdown2">
                                <Link to="/announcements" 
                                        activeClassName="active">Announcements</Link>             
                            </li>
                            <ul id="dropdown2" className="dropdown-content">
                                <li><a href="#">one</a></li>
                                <li><a href="#">two</a></li>
                                <li className="divider" />
                                <li><a href="#">three</a></li>
                            </ul>
                            <li className="tab dropdown-button" data-activates="dropdown3">
                                
                                <Link to="/testimonials" 
                                        activeClassName="active">Testimonials</Link>
                               
                                
                            </li>
                            <ul id="dropdown3" className="dropdown-content">
                                <div className="nav-children">
                                    <li><Link to="/awards" 
                                            activeClassName="active">Awards</Link></li>
                                
                                </div>
                                
                            </ul>
                        </ul>

 
                    
                        </div>
                    </nav>
                    </div> 


     <div className="hidnav">
    <div className="navbar-fixed">




        <nav className="hide-nav">
        
          <div className="nav-wrapper">
            
              <a className="dropdown-button" href="#" data-activates="dropdown1"></a>
              <a className="dropdown-button" href="#" data-activates="dropdown2"></a>
              <a className="dropdown-button" href="#" data-activates="dropdown3"></a>
              
          </div>
          
        </nav>
     
      </div>
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
                3211 W. McGraw #99092 <br/>
                Seattle, WA  98139 <br/>
                
              </p>
            </div>
            <div className="col s4">
              <h5 className="white-text">Contact</h5>
              <p className="grey-text text-lighten-4">
                info@EpicPet Health.com <br/>
                (206) 450-1118 <br/>
                <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i><span><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></span>
                


              </p>
            </div>
            <div className="col s4">
              <h5 className="white-text">Company</h5>
              <p className="grey-text text-lighten-4">
              About Us <br/>
              FAQ <br/>
              Blog <br/>
              </p>
              <h5 className="white-text">Newsletter</h5>
              <p className="grey-text text-lighten-4 sign-up-here">
              Sign Up Here
              </p>
              
      <div className="input-field inline">
        <input id="email" type="email" className="validate" placeholder="email"/>
        <label htmlFor="email" data-error="wrong" data-success="right"></label>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            <i className="material-icons right">send</i>
  </button>
      </div>
  
              
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © Epic Pet Health 2014
            
          </div>
        </div>
      </footer>

                </div>


            );
        }
}


                // <div className="navbar-fixed">
                //     <nav className="nav-extended">
                //         <div className="nav-wrapper">
                //         <IndexLink to="/" className="brand-logo" activeClassName="active">
                //                <img src="../../img/logos/eph-logo.png" alt=""/>
                //             </IndexLink>

                       
                        
                //         <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                //         <ul id="nav-mobile" className="right hide-on-med-and-down">
                //             <li><Link to="/about" 
                //                             activeClassName="active">About</Link></li>
                //             <li><a href="#">Shop</a></li>
                //             <li><Link to="/faq" 
                //                             activeClassName="active">FAQ</Link></li>
                //             <li><a href="#">Search</a></li>
                //         </ul>
                //         <ul className="side-nav" id="mobile-demo">
                //             <li><Link to="/about" 
                //                             activeClassName="active">About</Link></li>
                //             <li><a href="#">Shop</a></li>
                //             <li><Link to="/faq" 
                //                             activeClassName="active">FAQ</Link></li>
                //             <li><a href="#">Search</a></li>


                //         </ul>


                //         <ul className="tabs tabs-transparent">
                //             <li><a className="dropdown-button" href="#" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                //                 <li className="tab dropdown-button" data-activates="dropdown1">
                                
                //                 <Link to="/products" 
                //                             activeClassName="active">Products</Link>
                                
                                    
                //                 </li>
                //                 <ul id="dropdown1" className="dropdown-content">
                //                     <div className="nav-children">
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Best-Sellers</Link></li>
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Agility</Link></li>
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Allegy</Link></li>     
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Behavioral</Link></li>
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Cat</Link></li>
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Horse</Link></li>
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Prevention & Wellness</Link></li>
                //                             <li className="divider" />
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">All Products</Link></li>       
                //                 </div>
                                
                //                 </ul>
 
                   
                //             <li className="tab dropdown-button" data-activates="dropdown2">
                //                 <Link to="/announcements" 
                //                         activeClassName="active">Announcements</Link>             
                //             </li>
                //             <ul id="dropdown2" className="dropdown-content">
                //                 <li><a href="#">one</a></li>
                //                 <li><a href="#">two</a></li>
                //                 <li className="divider" />
                //                 <li><a href="#">three</a></li>
                //             </ul>
                //             <li className="tab dropdown-button" data-activates="dropdown3">
                                
                //                 <Link to="/testimonials" 
                //                         activeClassName="active">Testimonials</Link>
                               
                                
                //             </li>
                //             <ul id="dropdown3" className="dropdown-content">
                //                 <div className="nav-children">
                //                     <li><Link to="/awards" 
                //                             activeClassName="active">Awards</Link></li>
                                
                //                 </div>
                                
                //             </ul>
                //         </ul>








 
                    
                //         </div>
                //     </nav>
                //     </div> 





















                    //             <div className="navbar-fixed">
                    // <nav className="nav-extended">
                    //     <div className="nav-wrapper">
                    //     <IndexLink to="/" className="brand-logo" activeClassName="active">
                    //            <img src="../../img/logos/eph-logo.png" alt=""/>
                    //         </IndexLink>

                       
                        
                    //     <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    //     <ul id="nav-mobile" className="right hide-on-med-and-down">
                    //         <li><Link to="/about" 
                    //                         activeClassName="active">About</Link></li>
                    //         <li><a href="#">Shop</a></li>
                    //         <li><Link to="/faq" 
                    //                         activeClassName="active">FAQ</Link></li>
                    //         <li><a href="#">Search</a></li>
                    //     </ul>
                    //     <ul className="side-nav" id="mobile-demo">
                    //         <li><Link to="/about" 
                    //                         activeClassName="active">About</Link></li>
                    //         <li><a href="#">Shop</a></li>
                    //         <li><Link to="/faq" 
                    //                         activeClassName="active">FAQ</Link></li>
                    //         <li><a href="#">Search</a></li>


                    //     </ul>


                    //     <ul className="tabs tabs-transparent">
                    //         <li><a className="dropdown-button" href="#" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
                    //             <li className="tab dropdown-button" data-activates="dropdown1">
                                
                    //             <Link to="/products" 
                    //                         activeClassName="active">Products</Link>
                                
                                    
                    //             </li>
                    //             <ul id="dropdown1" className="dropdown-content">
                    //                 <div className="nav-children">
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Best-Sellers</Link></li>
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Agility</Link></li>
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Allegy</Link></li>     
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Behavioral</Link></li>
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Cat</Link></li>
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Horse</Link></li>
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Prevention & Wellness</Link></li>
                    //                         <li className="divider" />
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">All Products</Link></li>       
                    //             </div>
                                
                    //             </ul>
 
                   
                    //         <li className="tab dropdown-button" data-activates="dropdown2">
                    //             <Link to="/announcements" 
                    //                     activeClassName="active">Announcements</Link>             
                    //         </li>
                    //         <ul id="dropdown2" className="dropdown-content">
                    //             <li><a href="#">one</a></li>
                    //             <li><a href="#">two</a></li>
                    //             <li className="divider" />
                    //             <li><a href="#">three</a></li>
                    //         </ul>
                    //         <li className="tab dropdown-button" data-activates="dropdown3">
                                
                    //             <Link to="/testimonials" 
                    //                     activeClassName="active">Testimonials</Link>
                               
                                
                    //         </li>
                    //         <ul id="dropdown3" className="dropdown-content">
                    //             <div className="nav-children">
                    //                 <li><Link to="/awards" 
                    //                         activeClassName="active">Awards</Link></li>
                                
                    //             </div>
                                
                    //         </ul>
                    //     </ul>








 
                    
                    //     </div>
                    // </nav>
                    // </div>