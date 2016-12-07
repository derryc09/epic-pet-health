



import React from "react";




export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        


        return (
            <div className="award">
                
                <img src={this.props.award.img} alt="" className="award-image"/>
                 <a className="waves-effect waves-light btn" href={this.props.award.link}>Read More</a>
            </div>
        );
    }
}




