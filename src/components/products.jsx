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


              <div key={PRODUCTS.indexOf(product)} className="col s12 m7 flex-column">
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



                <div className="card sticky-action">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://materializecss.com/images/office.jpg"/>
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>

                <div className="products">
                    <div className="container flex-row">
                        {productCards}
                    </div>
                </div>
            </div>
        );
    }
}