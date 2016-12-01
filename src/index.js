import React from "react";
import {render} from "react-dom";

import Main from "./components/main.jsx";
import App from "./components/app.jsx";
import Products from "./components/products.jsx";
import Announcements from "./components/announcements.jsx";
import Testimonials from "./components/testimonials.jsx";
import About from "./components/about.jsx";
//import SearchForm from "./components/search-form.jsx";

//import our stylesheet so webpack puts it into the bundle
//import "./css/main.css";

//TODO: replace the JSX here with a Router configuration
//from the react router module (already a dependency in package.json)
// render((
//     <App/>
//     ), document.getElementById("app"));



import {Router, Route, IndexRoute, hashHistory} from "react-router";

var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="/products" component={Products}></Route>
            <Route path="/announcements" component={Announcements}></Route>
            <Route path="/testimonials" component={Testimonials}></Route>
            <Route path="/about" component={About}></Route>
        </Route>
    </Router>
);

render(router, document.getElementById("app"));