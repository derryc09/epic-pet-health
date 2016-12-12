import React from "react";
import AwardCard from "./award-card.jsx";

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
            <div>
                <h4 id="headingAwards">Awards and Media</h4>
                <div className="award-list">
                    {awardCard}
                    {this.props.children}
                </div>
            </div>
        );
    }
}