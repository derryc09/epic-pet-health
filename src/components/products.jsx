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
              <div key={this.state.products.indexOf(product)} className="products col flex-col-products s12 m7">
                <div className="card horizontal">
                <div className="card-image">
                    <img className="product-image" src={product.img}></img>
                </div>
                <div className="card-stacked products-text">
                    <h5>{product.name}</h5>
                    <i>Come in for a sample</i>
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

                    <button href="#/products" onClick={() => this.bestSellers()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Best-Sellers
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.agility()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Agility
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.behavioral()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Behavioral
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.prevention()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Prevention & Wellness
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.allergy()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Allergy
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.cat()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Cat
                        </span>
                    </button>
                    <button href="#/products" onClick={() => this.horse()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                Horse
                        </span>
                    </button>   
                    <button href="#/products" onClick={() => this.reset()} className="btn waves-effect waves-light" type="submit" name="action">
                        <span>
                                All Products
                        </span>
                    </button>                                                                                                                        
   
                </div>
                
                <div className="products1">
                <div className="flex-row-products">
                {productCards} 
                </div>
            </div>
            </div>
        );
    }
}