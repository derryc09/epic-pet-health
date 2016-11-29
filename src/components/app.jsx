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
                    <nav>
                        <ul>
                            <li>
                                <IndexLink to="/"
                                    activeClassName="active">Main</IndexLink>
                            </li>
                            <li>
                                <Link to="/products" 
                                    activeClassName="active">Products</Link>
                                    
                            </li>
                            <li>
                                <Link to="/announcements" 
                                    activeClassName="active">Announcements</Link>
                                    
                            </li>
                            <li>
                                <Link to="/testimonials" 
                                    activeClassName="active">Testimonials</Link>
                                    
                            </li>                                                        

                        </ul>
                    </nav>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            );
        }
}
