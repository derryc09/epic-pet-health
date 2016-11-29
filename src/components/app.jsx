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
                <nav class="nav-extended">
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    <ul class="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>

                    <ul class="tabs tabs-transparent">
                        <li class="tab">
                                <a href="#test1"><IndexLink to="/"
                                    activeClassName="active">Main</IndexLink></a>
                                
                        </li>
                        <li class="tab">
                            <a class="active" href="#test2"><Link to="/products" 
                                    activeClassName="active">Products</Link></a>
                            
                        </li>
                        <li class="tab">
                            <a href="#test3"><Link to="/announcements" 
                                    activeClassName="active">Announcements</Link></a>
                            
                        </li>
                        <li class="tab">
                            <a href="#test4"><Link to="/testimonials" 
                                    activeClassName="active">Testimonials</Link></a>
                            
                        </li>
                    </ul>
                    </div>
                </nav>
                <div id="test1" class="col s12">Test 1</div>
                <div id="test2" class="col s12">Test 2</div>
                <div id="test3" class="col s12">Test 3</div>
                <div id="test4" class="col s12">Test 4</div>
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
                //                     activeClassName="active">Main</IndexLink>
                //             </li>
                //             <li>
                //                 <Link to="/products" 
                //                     activeClassName="active">Products</Link>
                                    
                //             </li>
                //             <li>
                //                 <Link to="/announcements" 
                //                     activeClassName="active">Announcements</Link>
                                    
                //             </li>
                //             <li>
                //                 <Link to="/testimonials" 
                //                     activeClassName="active">Testimonials</Link>
                                    
                //             </li>                                                        

                //         </ul>
                //     </nav>
                //     <main>
                //         {this.props.children}
                //     </main>
                // </div>