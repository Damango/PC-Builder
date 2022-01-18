import React from 'react';
import "./PCBuilder.css"
import PartSelector from "../PartSelector/PartSelector"
import CheckoutPage from "../CheckoutPage/CheckoutPage"
import {useState} from 'react'
const PCBuilder = () => {

const [viewState, setViewState] = useState('part-selector')
const [selectedParts, setSelectedParts] = useState([])




function renderViewState(){
    if(viewState === 'part-selector'){
       
        return(<PartSelector setViewState={setViewState} selectedParts={selectedParts} setSelectedParts={setSelectedParts}/>)
    }
    else if(viewState === 'checkout-page'){
        return(<CheckoutPage selectedParts={selectedParts} setSelectedParts={setSelectedParts}/>)
    }
}

    return (<div className="pc-builder-app-container">
        <div className="main-nav-bar-container">
            <div className="main-nav-bar-wrapper center-all">
                <div className="main-nav-bar-button" onClick={() => {setViewState('part-selector')}}>Part Selector</div>
                <div className="main-nav-bar-button">Community Builds</div>
                <div className="main-nav-bar-button">Finished Builds</div>
            </div>
            <button className="nav-view-cart-button" onClick={() => {setViewState('checkout-page')}} >View Cart</button>
        </div>
        <div className="main-view-container">
           {renderViewState()}
        </div>
    </div>);
}

export default PCBuilder;