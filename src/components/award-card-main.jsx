
import React from "react";




export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="award-main">
                <img src={this.props.award.img} alt="" className="award-image"/>
            </div>
        );
    }
}

