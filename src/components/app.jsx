import React from "react";

import{Link, IndexLink} from "react-router";
//import {store} from "./shared-state.js";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        
        //this.state = {};
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
                            
                                <li className="tab" data-activates='dropdown1'>
                                    <Link to="/products" 
                                            activeClassName="active">Products</Link>
                                      <ul id='dropdown1' className='dropdown-content'>
                                        <li><a href="#!">one</a></li>
                                        <li><a href="#!">two</a></li>
                                        
                                        <li><a href="#!">three</a></li>
                                     </ul>
                                </li>
                            
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
                    <main>
                        {this.props.children}
                    </main>
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











