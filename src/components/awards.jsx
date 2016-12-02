import React from "react";
import AwardCard from "./award-card.jsx";
//import AWARDS from "./../../data/awards.js";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(AWARDS);
        var awardCard = AWARDS.map(award => (
            <AwardCard key={award.name} className="awardCard" award={award}>
            
            </AwardCard>
        ));
        

        return (

            

            <div className="award-list">
                
                {awardCard}
               
            </div>
        );
    }
}