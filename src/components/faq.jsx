import React from "react";
import ReactDOM from 'react-dom';


import "whatwg-fetch";




export default class extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){

    }

    render() {

        return (
            
            <div className="faq">
            
                <center><h2>Frequently Asked Questions</h2></center>
                <div className="container">
                    <ul className="collapsible" data-collapsible="accordion">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>How many times a day should I give these to my pet?</b></div>
                            <div className="collapsible-body"><p>Once a day is good for maintenance.  If your pet needs some extra help, put it in their food, water and on their body two or three times per day.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>Does it work on all animals?</b></div>
                            <div className="collapsible-body"><p>Yes, the formulas work for all pets and breeds.  They are made from human grade ingredients with no chemicals, dyes, or preservatives.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>How long should you give the supplements to your pet?</b></div>
                            <div className="collapsible-body"><p>You can give the formulas as long as your pet needs help.  Vitality is good for maintaining excellent health in your pet and can be taken everyday.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>What is the best formula if my dog has arthritis?</b></div>
                            <div className="collapsible-body"><p>Both the Repair and Relief are made for pain relief.  Repair will help the tissues rejuvenate and Relief helps with pain relief.  If your dog is very active, consider Align and Massage.  These help relax the spinal nerves and muscles.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>How does it work so quickly?</b></div>
                            <div className="collapsible-body"><p>The supplements are made of very diluted vitamins, minerals and electrolytes in alkaline water, so the body is able to quickly use the ingredients without the digestion system having to break them down first.  Spraying them on the body also helps absorption by the lungs if sprayed in the face, and by the skin if sprayed on the body.</p></div>
                        </li>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i><b>Is it okay to give these before bed?</b></div>
                            <div className="collapsible-body"><p>Yes, the supplements can be given before bedtime, especially the Calm and Sleep formulas which help your pet comfortably sleep through the night.  Revive, Vitality and Clarity are made to increase energy, so it may be best to give these at least two hours before bed.</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
