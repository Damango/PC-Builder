import React from 'react';
import {useState, useEffect} from 'react'
import "./CheckoutPage.css"


const CheckoutPage = (props) => {
    console.log(props)
    return ( <div className="checkout-page-container">
       <div className="checkout-page-parts-list-container">
           <div className="checkout-page-parts-list-header">Shopping Cart (2)</div>

           <div className="checkout-page-parts-list-wrapper">
            {props.selectedParts.map((part) => 
                <div className="checkout-page-part-container">
                    <div className="checkout-page-part-image-container">
                        <div className="checkout-page-part-image"style={{ backgroundImage: `url(${part.item.imageURL})` }}></div>
                    </div>
                    <div className="checkout-page-part-details-wrapper">
                        <div className="checkout-page-part-name">{part.item.name}</div>
                        <div className="checkout-page-part-highlights-container">
                            {part.item.highlights.map((highlight) => <div className="checkout-page-part-highlight">{highlight.key +':' + " " +highlight.value}</div>)}
                        </div>
                    </div>

                    <div className="checkout-page-part-price">
                        <div className="checkout-page-part-price-amount">${part.item.price}</div>
                    </div>
                    <button className="checkout-page-remove-button">REMOVE</button>
                    
                   
                </div>)}
           </div>


           
       </div>
       <div className="checkout-page-summary-container"></div>
    </div> );
}
 
export default CheckoutPage;