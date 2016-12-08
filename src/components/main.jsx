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