import React from "react";
import {render} from "react-dom";


import Main from "./components/main.jsx";
import App from "./components/app.jsx";
import Products from "./components/products.jsx";
import Announcements from "./components/announcements.jsx";
import Testimonials from "./components/testimonials.jsx";
import About from "./components/about.jsx";
import Faq from "./components/faq.jsx";
import Awards from "./components/awards.jsx";
<<<<<<< HEAD
=======
//import SearchForm from "./components/search-form.jsx";
>>>>>>> 949263749700610749eaed8069f1a8e22d07155c





import {Router, Route, IndexRoute, hashHistory} from "react-router";


var router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="/products" component={Products}></Route>
            <Route path="/announcements" component={Announcements}></Route>
            <Route path="/testimonials" component={Testimonials}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/faq" component={Faq}></Route>
            <Route path="/awards" component={Awards}></Route>
        </Route>
    </Router>
);


render(router, document.getElementById("app"));