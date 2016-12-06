import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var img_calm = "../img/products/calm-transparent.png";
        var img_skin = "../img/products/skin-transparent.png";
        var img_happy = "../img/products/happy-transparent.png";
        var img_repair = "../img/products/repair-transparent.png";
        var img_height = 230;

        return (
            <div className="main">
                <h2>Best-Sellers</h2>

                <div className="container">
                
                    <div className="products col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img className="product-image" src={img_calm} height={img_height}/>
                            </div>
                            <div className="card-stacked products-text">
                                <h5>Calm</h5>
                                <i>For tranquil, relaxed behavior</i>
                                <div className="card-content">
                                    <p>Calms a stressed dog or cat. It also relaxes hyper animals, such as puppies and kittens. Use it to encourage restful, all night sleep.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img className="product-image" src={img_skin} height={img_height}/>
                            </div>
                            <div className="card-stacked products-text">
                                <h5>Skin</h5>
                                <i>Relieves itchy, flaky skin</i>
                                <div className="card-content">
                                    <p>Promotes healthy skin and coats. It also relieves scratchy, dry skin. Helps ease discomfort from flea bites and other skin irritants.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img className="product-image" src={img_happy} height={img_height}/>
                            </div>
                            <div className="card-stacked products-text">
                                <h5>Happy</h5>
                                <i>Reduces stress and anxiety</i>
                                <div className="card-content">
                                    <p>Reduces stress from grief, separation anxiety, and environmental changes. It helps your pet feel better and get back to normal.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img className="product-image" src={img_repair} height={img_height}/>
                            </div>
                            <div className="card-stacked products-text">
                                <h5>Repair</h5>
                                <i>For faster injury recovery</i>
                                <div className="card-content">
                                    <p>Helps boost the body’s immune response and relieves aches, pains and inflammation. It is good for injury recovery and supports the body during illness.</p>
                                </div>
                                <div className="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                
            </div>
        </div>
        );
    }
}






                            //                                 <div className="col s12 m7">
                            //     <h2 className="header">{product.name}</h2>
                            //     <div className="card horizontal">
                            //     <div className="card-image">
                            //         <img src={img_calm} height={img_height}/>
                            //     </div>
                            //     <div className="card-stacked">
                            //         <div className="card-content">
                            //         <p>{product.description}</p>
                            //         </div>
                            //         <div className="card-action">
                            //         <a href="https://epic-pet-health.myshopify.com/">Buy now</a>
                            //         </div>
                            //     </div>
                            //     </div>
                            // </div>