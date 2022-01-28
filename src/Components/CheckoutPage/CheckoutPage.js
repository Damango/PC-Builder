import React from 'react';
import {useState, useEffect} from 'react'
import "./CheckoutPage.css"


const CheckoutPage = (props) => {


    useEffect(() => {

    }, [])



    const checkoutParts = useState(props.partLinks);


    function calculateTotal(){
        let total = 0;
        let i;
        for(i = 0; i < props.selectedParts.length; i++){
            total += props.selectedParts[i].item.price
            //console.log(total)
        }

        //console.log(props.selectedParts)

        return (total)
    }


    function renderItemSections2(){

        let checkoutArray = []


   

        return(checkoutParts[0].map((part, index) => <div className="checkout-page-part-wrapper">
           
            <div className="checkout-page-part-header">{part.partCategory.toUpperCase()}</div>
            <div className="checkout-page-part-container" onClick={() => {props.setViewState({view:'part-selector', index:index})}}>SELECT PART +</div>
        
        </div>))
        
    }

    function renderItemSections(){
       // console.log(props.selectedParts)
        let i, j;

        let sectionArray = [];
        for(i = 0; i < props.partLinks.length; i++){
            if(!props.partLinks[i].selected){
                sectionArray.push(<div className="checkout-page-part-wrapper">
                    <div className="checkout-page-part-header">{props.partLinks[i].partCategory.toUpperCase()}</div>
                    <div className="checkout-page-part-container">SELECT PART +</div>
                    
                    </div>)
            }
            else{
                for(j = 0; j < props.selectedParts.length; j++){
                    if(props.selectedParts[j].item.type === props.partLinks[i].partCategory){
                        sectionArray.push(<div className="checkout-page-part-wrapper">
                             <div className="checkout-page-part-header">{props.partLinks[i].partCategory.toUpperCase()}</div>
                             <div className="checkout-page-part-container">
                    <div className="checkout-page-part-image-container">
                        <div className="checkout-page-part-image"style={{ backgroundImage: `url(${props.selectedParts[j].item.imageURL})` }}></div>
                    </div>
                    <div className="checkout-page-part-details-wrapper">
                        <div className="checkout-page-part-name">{props.selectedParts[j].item.name}</div>
                        <div className="checkout-page-part-highlights-container">
                            {props.selectedParts[j].item.highlights.map((highlight, index) => <div className="checkout-page-part-highlight">{highlight.key +':' + " " +highlight.value}</div>)}
                        </div>
                    </div>
                    <div className="checkout-page-part-price">
                        <div className="checkout-page-part-price-amount">${props.selectedParts[j].item.price}</div>
                    </div> 
                    <button className="checkout-page-remove-button" onClick={() => {sectionArray[j - 1] = (<div>OK</div>); props.removeSelectedPart(j - 1); console.log(props.selectedParts)}}>REMOVE</button>
                </div>
                </div>
                        )
                    }
                }
            }
        }


        return(sectionArray)
    }




    
    return ( <div className="checkout-page-container">
       
       <div className="checkout-page-parts-list-container">
           <div className="checkout-page-parts-list-header">Shopping Cart ({props.selectedParts.length})</div>

           <div className="checkout-page-parts-list-wrapper">
            


          
            {renderItemSections2()}





 
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




/*
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






*/