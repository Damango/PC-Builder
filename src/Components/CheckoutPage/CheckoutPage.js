import React from 'react';
import {useState, useEffect} from 'react'
import "./CheckoutPage.css"


const CheckoutPage = (props) => {



    function calculateTotal(){
        let total = 0;
        let i;
        for(i = 0; i < props.selectedParts.length; i++){
            total += props.selectedParts[i].item.price
            console.log(total)
        }

        console.log(props.selectedParts)

        return (total)
    }




    console.log(props)
    return ( <div className="checkout-page-container">
       <div className="checkout-page-parts-list-container">
           <div className="checkout-page-parts-list-header">Shopping Cart ({props.selectedParts.length})</div>

           <div className="checkout-page-parts-list-wrapper">
            {props.selectedParts.map((part, index) => 
                <div className="checkout-page-part-container">
                    <div className="checkout-page-part-image-container">
                        <div className="checkout-page-part-image"style={{ backgroundImage: `url(${part.item.imageURL})` }}></div>
                    </div>
                    <div className="checkout-page-part-details-wrapper">
                        <div className="checkout-page-part-name">{part.item.name}</div>
                        <div className="checkout-page-part-highlights-container">
                            {part.item.highlights.map((highlight, index) => <div className="checkout-page-part-highlight">{highlight.key +':' + " " +highlight.value}</div>)}
                        </div>
                    </div>
                    <div className="checkout-page-part-price">
                        <div className="checkout-page-part-price-amount">${part.item.price}</div>
                    </div>
                    <button className="checkout-page-remove-button" onClick={() => {props.removeSelectedPart(index); console.log(index)}}>REMOVE</button>
                </div>)}
           </div>


           
       </div>
       <div className="checkout-page-summary-container">
            <div className="item-summary-container">
                <div className="item-summary-header">Summary</div>
                <div className="item-summary-list">{props.selectedParts.map((part) => <div className="item-summary-item">
                    
                    <span>{part.item.name}</span>
                    <span>{part.item.price}</span>

                    </div>)}</div>
            </div>
            <div className="summary-footer">
                <div className="summary-footer-total-and-count">
                   <span>Item(s): {props.selectedParts.length}</span> 
                    <span>{calculateTotal()}</span>
                </div>
                <button className="checkout-button">CHECKOUT</button>

            </div>

       </div>
    </div> );
}
 
export default CheckoutPage;