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
                    <a href="#" className="brand-logo">Logo</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>

                    <ul className="tabs tabs-transparent">
                        <li className="tab">
                                <a href="#test1"><IndexLink to="/"
                                    activeclassNameName="active">Main</IndexLink></a>
                                
                        </li>
                        <li className="tab">
                            <a className="active" href="#test2"><Link to="/products" 
                                    activeclassNameName="active">Products</Link></a>
                            
                        </li>
                        <li className="tab">
                            <a href="#test3"><Link to="/announcements" 
                                    activeclassNameName="active">Announcements</Link></a>
                            
                        </li>
                        <li className="tab">
                            <a href="#test4"><Link to="/testimonials" 
                                    activeclassNameName="active">Testimonials</Link></a>
                            
                        </li>
                    </ul>
                    </div>
                </nav>
                <div id="test1" className="col s12">Test 1</div>
                <div id="test2" className="col s12">Test 2</div>
                <div id="test3" className="col s12">Test 3</div>
                <div id="test4" className="col s12">Test 4</div>
                <main>
                    {this.props.children}
                </main>
            </div>






            );
        }
}


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











