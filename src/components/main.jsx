import React from "react";
import {render} from "react-dom";
import AwardCard from "./award-card.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        $('.parallax').parallax();
    }

        componentDidMount() {
            $('.carousel').carousel();
            $('.parallax').parallax();
        }

    render() {
        var img_calm = "../img/products/calm-transparent.png";
        var img_skin = "../img/products/skin-transparent.png";
        var img_happy = "../img/products/happy-transparent.png";
        var img_repair = "../img/products/repair-transparent.png";
        var img_height = 230;

        var awardCard = AWARDSSMALL.map(award => (
            <AwardCard key={award.name} className="awardCardMain" award={award}></AwardCard>
        ));
        return (
        <div className="main">
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel"> 
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to={0} className="active" />
                        <li data-target="#myCarousel" data-slide-to={1} />
                        <li data-target="#myCarousel" data-slide-to={2} />    
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
                <section className="awards">
                        <h2>Awards</h2>
                        <div className="award-list-main">                
                            {awardCard}
                        </div>
                </section>
                </div>
            </div>
        );
    }
}

