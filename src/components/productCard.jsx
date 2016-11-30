import React from "react";
import ReactDOM from 'react-dom';

export default class extends React.Component {
    constructor(props) {
        
        super(props);
    }


    render() {
        // console.log(this.props);
        // var cartItemDVD = {title:this.props.movie, format:"DVD", quantity:1, price: "14.95", id:this.props.movie.id+"DVD"};
        // var cartItemBR = {title:this.props.movie, format:"Blu-Ray", quantity:1, price: "19.95", id:this.props.movie.id+"BlueRay"};
        return (
                <div>
                    <h4>Product: {this.state.name}</h4>
                </div>   
                // <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--3dp">
                //     <div className="mdl-card__media">
                //         <img className="posterImage" src={image}></img>
                //     </div>   
                    
                //     <div className="mdl-card__title">
                //         <h4 className="mdl-card__title-text">{this.props.movie.title}</h4>
                //     </div>   
                //     <div className="mdl-card__supporting-text">
                //         <span className="mdl-typography--font-light mdl-typography--subhead">{this.truncate(this.props.movie.overview)}</span>
                //     </div>
                //     <div className="mdl-card__actions">
                //         <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase noselect" 
                //         onClick={() => store.dispatch(addCart(cartItemDVD))} >

                //         BUY ON DVD
                //         <i className="material-icons">chevron_right</i>
                //         </a>
                //         <a className="android-link mdl-button mdl-js-button mdl-typography--text-uppercase noselect" 
                //         onClick={() => store.dispatch(addCart(cartItemBR))} >

                //         BUY ON BLU-RAY
                //         <i className="material-icons">chevron_right</i>
                //         </a>
                //     </div>               
                // </div>      

        );
    }
}
