import React from "react";
import AwardCard from "./award-card.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
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
            <main>
                <div className="parallax-container">
                    <div className="parallax"><img src="../img/other/robbie-joey.jpg"></img></div>
                </div>

                <div className="section bestSellers">
                    <h2>Best-Sellers</h2>
                    <div className="bestSellers-content row container">
      
                                
                                <div className="products col s12 m7 container">
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


                                <div className="products col s12 m7 container">
                                    <div className="card horizontal">
                                        <div className="card-image">
                                            <img className="product-image" src={img_skin} height={img_height}/>
                                        </div>
                                        <div className="card-stacked products-text">
                                            <h5>Skin</h5>
                                            <i>Relieves itchy, flaky skin</i>
                                            <div className="card-content">
                                                <p>Promotes healthy skin and coats. It also relieves scratchy, dry skin. Helps ease discomfort from flea bites and skin irritants.</p>
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
                                                <p>Boosts body’s immune response, relieves aches, pains and inflammation. Good for injury recovery and supports the body.</p>
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
            </main>
        );
    }
}