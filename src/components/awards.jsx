import React from "react";
import AwardCard from "./award-card.jsx";
//import AWARDS from "./../../data/awards.js";

<<<<<<< HEAD

=======
>>>>>>> 949263749700610749eaed8069f1a8e22d07155c
export default class extends React.Component {
    constructor(props) {
        super(props);
    }

<<<<<<< HEAD

=======
>>>>>>> 949263749700610749eaed8069f1a8e22d07155c
    render() {
        console.log(AWARDS);
        var awardCard = AWARDS.map(award => (
            <AwardCard key={award.name} className="awardCard" award={award}>
            
            </AwardCard>
        ));
        
<<<<<<< HEAD
        return (
            <div className="award-list">
                {awardCard}        
            </div>
        );
    }
}
=======

        return (

            <div>
            <h4>Awards and Media</h4>
            <div className="award-list">
            
                
                {awardCard}
               
            </div>
            </div>
        );
    }
}
>>>>>>> 949263749700610749eaed8069f1a8e22d07155c
