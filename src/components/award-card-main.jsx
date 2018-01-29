import React from "react";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="award-main">
                <a href={this.props.award.link}><img src={this.props.award.img} alt="" className="award-image"/></a>
            </div>
        );
    }
}

