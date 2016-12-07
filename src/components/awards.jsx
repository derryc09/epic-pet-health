import React from "react";
import AwardCard from "./award-card.jsx";
//import AWARDS from "./../../data/awards.js";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var awardCard = AWARDS.map(award => (
            <AwardCard key={award.name} className="awardCard" award={award}>
            
            </AwardCard>
        ));
        
        return (
            <div className="awardTitle">
                <h2>Awards and Media</h2>
                <div className="award-list">
                    {awardCard}
                </div>
            </div>
        );
    }
}

