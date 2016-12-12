import React from "react";
import ReactDOM from 'react-dom';

import "whatwg-fetch";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount() {
        $('.parallax').parallax();
    }

    render() {


        return (
            <div className="about">
                <div className="parallax-container">
                    <div className="parallax"><img src="img/other/robbie-joey.jpg"></img></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <center>
                            <img src="img/other/amy.png"/>   
                            <img src="img/other/girls.png"/>
                            <h5>
                                We’re helping pets live longer, happier, healthier lives!
                            </h5>
                        </center>

                        <p>
                            Epic Pet Health is the maker of natural dog and cat supplements that restore comfort and provide affordable, long term health maintenance.<br/><br/>

                            Our odorless and tasteless supplements are made from diluted vitamins and minerals in alkaline water with added electrolytes. The supplements are safe and effective for a better quality of life in dogs and cats of all breeds and sizes.<br/><br/>

                            Our easy to administer vitamin supplements involves no mixing or rubbing. Just spray or place a few drops of a supplement on food and water. Also apply to pet’s body for faster, stronger results which are typically seen in one to 14 days. These vitamin supplements provide a great value—approximately 120 servings in a two ounce bottle and 60 servings in a one ounce bottle. Attractive bottles store easily on the counter or shelf, so they’re always within quick reach.<br/><br/>

                            <b>Our guarantee: If you are not satisfied with this product, return it within 30 days for a full refund. Help your pet feel better and happier today and give yourself the peace of mind you deserve.</b><br/><br/>
                        </p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src="img/other/dog-running.jpg"/>
                    </div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <center>
                            <img src="img/other/lucas.png"/>
                            <h5>
                                Lucas’ Story
                            </h5>
                        </center>

                        <p>
                            My name is Lucas.  I’m an 19 year old Maltese Poodle mix.  I may be old, but I’m tougher than you think.   I’ve had arthritis and allergies for a long time.  Aunt Amy started making spray supplements to help me feel better.  The first time she gave me Relief for my back pain, I felt so good that I walked around the house for 45 minutes.   I will always have arthritis, but now it doesn’t hurt so much.<br/><br/>
                            
                            Amy is a civil engineer and a holistic chiropractor, whatever that means.  She really likes helping animals feel better.  Her supplements don’t smell or taste bad and there isn’t a pill to take. The supplements are made of diluted vitamins and minerals in water with electrolytes.  At first she was only putting them in my food and water, but when she also sprayed my body it made me feel even better.  I have a friend that doesn’t like to be sprayed, so his mom uses the dropper top.<br/><br/>
                            
                            In the morning, she sprays my face with Clear which really helps my ‘old dog cough’ and allergies.  She sprays my legs and rear end with Legs so I can get up easier and turn around without falling, and now I am walking on my toes again.  She also sprays me with Eye, Skin, and Relief.<br/><br/>
                            
                            Aunt Amy started making supplements for other dogs and cats who needed help too, not just older pets.  She developed a whole line of supplements which help you feel calmer, younger and less itchy.<br/><br/>
                        </p>
                    </div>
                </div>
            </div>

        );
    }
}