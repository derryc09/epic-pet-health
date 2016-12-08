import React from "react";
import ReactDOM from 'react-dom';

import "whatwg-fetch";


function option(products) {
    var newProducts = products.filter(function(product) {
        
    });
    return newProducts;
}

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        var renderProducts = PRODUCTS; 
        var productCards = renderProducts.map(product => (
              <div key={PRODUCTS.indexOf(product)} className="col s12 m7">
                <h2 className="header">{product.name}</h2>
                <div className="card horizontal">
                <div className="card-image">
                    <img className="product-image" src={product.img}></img>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <p>{product.description}</p>
                    </div>
                    <div className="card-action">
                    <a href="https://epic-pet-health.myshopify.com/">Buy now</a>
                    </div>
                </div>
                </div>
            </div>
        ));
        return (

            <div className="products">
               <div className="productsGenre">
                    <span><a href="#">Best-Sellers</a></span>
                    <span><a href="#">Agility</a></span>
                    <span><a href="#">Behavioral</a></span>
                    <span><a href="#">Prevention & Wellness</a></span>
                    <span><a href="#">Allegy</a></span>
                    <span><a href="#">Cat</a></span>
                    <span><a href="#">Horse</a></span>
                    <span><a href="#">All Products</a></span>
                </div>
                {productCards} 
            </div>
        );
    }
}