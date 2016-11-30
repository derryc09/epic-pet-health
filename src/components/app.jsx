import React from "react";

import{Link, IndexLink} from "react-router";
//import {store} from "./shared-state.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
            this.state={
    open:false
    }
       //this.state = store.getState();
    }

    // componentDidMount() {
    //     this.unsub = store.subscribe(() => this.setState(store.getState()));
    // }

    // componentWillUnmount() {
    //     this.unsub(); 
    // }



    render() {
     
            return (
                
                <div>
                    <nav className="nav-extended">
                        <div className="nav-wrapper">
                        <a href="#/" className="brand-logo">Epic Pet Health</a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Search</a></li>
                        </ul>

                        <ul className="tabs tabs-transparent">
                            
                                <li className="tab dropbtn">
                                    <Link to="/products" 
                                            activeClassName="active">Products</Link>

                                </li>
                                <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                   
                            <li className="tab">
                                <Link to="/announcements" 
                                        activeClassName="active">Announcements</Link>
                                
                            </li>
                            <li className="tab">
                                <Link to="/testimonials" 
                                        activeClassName="active">Testimonials</Link>
                                
                            </li>
                        </ul>




 
                    
                        </div>
                    </nav>
                    



<div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider" />
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              {/* Dropdown Trigger */}
              <li><a className="dropdown-button" href="#" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
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

            <div className="col s3">
              <h5 className="white-text">How We Got Started</h5>
              <p className="grey-text text-lighten-4">In 2012, Dr. Amy Swartz started making odorless supplements for her 18 year old dog to improve his quality of life. The first supplement, Relief, helped the arthritis pain in his neck and back. The second supplement reduced his "old dog cough" and helped his allergies. Then she started making supplements for other pets in need. Now she sells the supplements on the internet so animals all over the world can get help.</p>
            </div>
            <div className="col s3">
              <h5 className="white-text">Contact Us</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col s3 offset-s3">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>







                </div>






            );
        }
}



                            // <li className="tab">
                            //         <IndexLink to="/"
                            //             activeClassName="active">Main</IndexLink>
                                    
                            // </li>


                // <div>
                //     <nav>
                //         <ul>
                //             <li>
                //                 <IndexLink to="/"
                //                     activeclassNameName="active">Main</IndexLink>
                //             </li>
                //             <li>
                //                 <Link to="/products" 
                //                     activeclassNameName="active">Products</Link>
                                    
                //             </li>
                //             <li>
                //                 <Link to="/announcements" 
                //                     activeclassNameName="active">Announcements</Link>
                                    
                //             </li>
                //             <li>
                //                 <Link to="/testimonials" 
                //                     activeclassNameName="active">Testimonials</Link>
                                    
                //             </li>                                                        

                //         </ul>
                //     </nav>
                //     <main>
                //         {this.props.children}
                //     </main>
                // </div>