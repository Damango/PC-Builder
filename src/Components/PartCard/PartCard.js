import React from 'react';
import "./PartCard.css"

const PartCard = (props) => {
    return ( <div className="part-card-container">
    <div className="part-name">{props.name}</div>
    <div className="part-image center-x"></div>
    <div className="part-price"></div>
    <div className="part-rating"></div>

</div> );
}
 
export default PartCard;