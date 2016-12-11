import React from "react";
import {render} from "react-dom";
import AwardCard from "./award-card-main.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    truncate(s){
        if(s.length > 175){
            return <span>{s.substring(0,175)}... <span className="readMore">Read More</span></span>
        } 

        return s;
    }

    componentDidMount() {
        $('.carousel').carousel();
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

                
                <div className="products col flex-col-products s12 m7">
                    <div className="card horizontal products-card-horizontal">
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

