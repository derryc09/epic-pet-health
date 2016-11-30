import React from "react";
import ReactDOM from 'react-dom';

import "whatwg-fetch";


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {

        var productCards = PRODUCTS.map(product => (


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
                {productCards}
            </div>
        );
    }
}