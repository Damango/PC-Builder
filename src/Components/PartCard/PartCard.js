import React from 'react';
import "./PartCard.css"

const PartCard = (props) => {
    return ( <div className="part-card-container">
    <div className="part-name">{props.data.name}</div>
    <div className="part-image center-x" style={{backgroundImage:`url(${props.data.imageURL})` }}></div>
    <div className="feature-tags-container">
        <div className="feature-tag">3.4 Ghz</div>
        <div className="feature-tag">8 Cores</div>
    </div>
    <div className="part-price">$629.99</div>
    <div className="part-rating">
        <div className="rating-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div className="rating-count">2,300</div>
    </div>
    <button className="select-button center-x">Select +</button>

</div> );
}
 
export default PartCard;