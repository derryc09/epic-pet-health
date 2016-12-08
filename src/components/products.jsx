import React from "react";
import ReactDOM from 'react-dom';

import "whatwg-fetch";




export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }

    }

    reset() {
       this.setState({products: PRODUCTS}, function () {
             console.log(this.state.products);
        });
    }

    bestSellers() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.bestseller);
        });
        this.setState({products: newProducts});
    }

    agility() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.agility);
        });
        this.setState({products: newProducts});
    }

    behavioral() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.behavioral);
        });
        this.setState({products: newProducts});
    }

    prevention() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.prevention);
        });
        this.setState({products: newProducts});
    }

    allergy() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.allergy);
        });
        this.setState({products: newProducts});
    }

    cat() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.cat);
        });
        this.setState({products: newProducts});
    }

    horse() {
        var newProducts = PRODUCTS.filter(function(product) {
            return (product.horse);
        });
        this.setState({products: newProducts});
    }





    componentWillMount() {
        this.setState({products: PRODUCTS});
    }



    render() {

           
    
        // console.log(this.state);
        // console.log(this.props);
        var productCards = this.state.products.map(product => (
              <div key={this.state.products.indexOf(product)} className="col s7">
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

            <div>
               <div className="productsGenre">
                    <span><a href="#/products" onClick={() => this.bestSellers()}>Best-Sellers</a></span>
                    <span><a href="#/products" onClick={() => this.agility()}>Agility</a></span>
                    <span><a href="#/products" onClick={() => this.behavioral()}>Behavioral</a></span>
                    <span><a href="#/products" onClick={() => this.prevention()}>Prevention & Wellness</a></span>
                    <span><a href="#/products" onClick={() => this.allergy()}>Allergy</a></span>
                    <span><a href="#/products" onClick={() => this.cat()}>Cat</a></span>
                    <span><a href="#/products" onClick={() => this.horse()}>Horse</a></span>
                    <span><a href="#/products" onClick={() => this.reset()}>All Products</a></span>
                </div>
                <div className="products">
                <div className="row">
                {productCards} 
                </div>
            </div>
            </div>
        );
    }
}