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
        var img_height = 250;

        return (
            <div className="main">
                <p>main</p>


                <div className="container">
                    <div className="container">
                        <div className="container products">
                            

                            <center><h2>Best-Sellers</h2>
                                    <div className="products col s12 m7">
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                <img className="product-image" src={img_calm} height={img_height}/>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <h5>Calm</h5>
                                                    <i>For tranquil, relaxed behavior</i>
                                                    <p>This supplement calms a stressed dog or cat. It also relaxes hyper animals, such as puppies and kittens. Use it to encourage restful, all night sleep.</p>
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
                                                <img src={img_skin} height={img_height}/>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <h3>Skin</h3>
                                                    <h6>Relieves itchy, flaky skin</h6>
                                                    <p>Promotes healthy skin and coats for dogs and cats. It also relieves scratchy, dry skin. Besides reducing itching and flaking, Skin helps ease discomfort from flea bites and other skin irritants.</p>
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
                                                <img src={img_happy} height={img_height}/>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <h3>Happy</h3>
                                                    <h6>Reduces stress and anxiety</h6>
                                                    <p>Happy reduces stress from grief, separation anxiety, and environmental changes. It helps your pet feel better and get back to normal.</p>
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
                                                <img src={img_repair} height={img_height}/>
                                            </div>
                                            <div className="card-stacked">
                                                <div className="card-content">
                                                    <h3>Repair</h3>
                                                    <h6>For faster injury recovery</h6>
                                                    <p>Repair helps boost the body’s immune response and relieves aches, pains and inflammation. It is good for injury recovery and supports the body during illness. This is a good supplement to have on hand to help your pet get back on their feet faster.</p>
                                                </div>
                                                <div className="card-action">
                                                    <a href="#">This is a link</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                            </center>
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