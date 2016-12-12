import React from "react";
import {render} from "react-dom";
import AwardCard from "./award-card-main.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    truncate(s) {
        if (s.length > 175){
            return <span>{s.substring(0,175)}... <span className="readMore">Read More</span></span>
        } 

        return s;
    }

    componentDidMount() {
        $('.carousel').carousel();
    }

    render() {
        var img_calm = "img/products/calm-transparent.png";
        var img_skin = "../img/products/skin-transparent.png";
        var img_happy = "../img/products/happy-transparent.png";
        var img_repair = "../img/products/repair-transparent.png";

        var awardCard = AWARDSSMALL.map(award => (
            <AwardCard key={award.name} className="awardCardMain" award={award}></AwardCard>
        ));
        return (
            <div className="main">
                <div id="myCarousel" className="carousel slide" data-ride="carousel"> 
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />    
                        <li data-target="#myCarousel" data-slide-to={3} />  
                    </ol>
                    
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="http://www.epicpethealth.com/wp-content/uploads/2015/11/Love1.jpg" alt="2" />
                        </div>
                        <div className="item">
                            <img src="http://epicpethealth.com/wp-content/uploads/2013/02/happy_narrow.jpg" alt="3" />
                        </div>
                        <div className="item">
                            <img src="http://www.epicpethealth.com/wp-content/uploads/2015/11/cat1.jpg" alt="4" />
                        </div>
                        <div className="item">
                            <img src="http://www.epicpethealth.com/wp-content/uploads/2015/11/dog1.jpg" alt="5" />
                        </div>
                    </div>
                            
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon fa fa-arrow-left fa-2x" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon fa fa-arrow-right fa-2x" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                
                
                <div className="bestSellers">
                    <h2>Best Sellers</h2>
                    <div className="main-flex-row-products">
                        
                        <div className="products col main-flex-col-products s12 m7">
                            <div className="card horizontal main-products-card-horizontal">
                                <div className="card-image">
                                    <img className="product-image" src={img_calm}></img>
                                </div>
                                <div className="card-stacked products-text">
                                    <h5>Calm</h5>
                                    <i>For tranquil, relaxed behavior</i>
                                    <div className="card-content">
                                        <p>{this.truncate("Calms a stressed dog or cat. It also relaxes hyper animals, such as puppies and kittens. Use it to encourage restful, all night sleep.")}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://epic-pet-health.myshopify.com/collections/frontpage/products/calm" target="_blank">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products col main-flex-col-products s12 m7">
                            <div className="card horizontal main-products-card-horizontal">
                                <div className="card-image">
                                    <img className="product-image" src={img_skin}></img>
                                </div>
                                <div className="card-stacked products-text">
                                    <h5>Skin</h5>
                                    <i>Relieves itchy, flaky skin</i>
                                    <div className="card-content">
                                        <p>{this.truncate("Promotes healthy skin and coats. It also relieves scratchy, dry skin. Helps ease discomfort from flea bites and other skin irritants.")}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://epic-pet-health.myshopify.com/collections/frontpage/products/skin" target="_blank">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products col main-flex-col-products s12 m7">
                            <div className="card horizontal main-products-card-horizontal">
                                <div className="card-image">
                                    <img className="product-image" src={img_happy}></img>
                                </div>
                                <div className="card-stacked products-text">
                                    <h5>Happy</h5>
                                    <i>Reduces stress and anxiety</i>
                                    <div className="card-content">
                                        <p>{this.truncate("Reduces stress from grief, separation anxiety, and environmental changes. It helps your pet feel better and get back to normal.")}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://epic-pet-health.myshopify.com/collections/frontpage/products/happy" target="_blank">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="products col main-flex-col-products s12 m7">
                            <div className="card horizontal main-products-card-horizontal">
                                <div className="card-image">
                                    <img className="product-image" src={img_repair}></img>
                                </div>
                                <div className="card-stacked products-text">
                                    <h5>Repair</h5>
                                    <i>For faster injury recovery</i>
                                    <div className="card-content">
                                        <p>{this.truncate("Helps boost the body’s immune response and relieves aches, pains and inflammation. It is good for injury recovery and supports the body during illness.")}</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://epic-pet-health.myshopify.com/collections/frontpage/products/repair" target="_blank">Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div>
                    <h2>All About Epic Pet Health</h2>
                    <div className="main-flex-row-products main-flex-col-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/I4h3D_Q3m6Y" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>


                <div className="awards">
                    <h2>Awards</h2>
                    <div className="award-list-main">                
                        {awardCard}
                    </div>
                </div>

            </div>
        );
    }
}

