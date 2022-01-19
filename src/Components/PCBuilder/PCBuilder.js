import React from 'react';
import "./PCBuilder.css"
import PartSelector from "../PartSelector/PartSelector"
import CheckoutPage from "../CheckoutPage/CheckoutPage"
import cpuParts from "../../data/cpuparts.js"
import motherBoardParts from "../../data/motherboardparts"
import graphicsCardParts from "../../data/graphicscardparts"
import {useState} from 'react'
const PCBuilder = () => {






const [viewState, setViewState] = useState('part-selector')


const [partLinks, setPartLinks] = useState([
    {
        partCategory: 'cpu',
        parts: cpuParts,
        selected: false,

    },
    {
        partCategory: 'motherboard',
        parts: motherBoardParts,
        selected: false,

    },
    {
        partCategory: 'graphics card',
        parts: graphicsCardParts,
        selected: false,

    },
    {
        partCategory: 'memory',
        parts: graphicsCardParts,
        selected: false,

    },
    {
        partCategory: 'storage',
        parts: graphicsCardParts,
        selected: false,

    },
    {
        partCategory: 'power supply',
        parts: graphicsCardParts,
        selected: false,

    },
    {
        partCategory: 'case',
        parts: graphicsCardParts,
        selected: false,

    },
    {
        partCategory: 'peripherals',
        parts: graphicsCardParts,
        selected: false,

    }
])





const [selectedParts, setSelectedParts] = useState([])




function renderViewState(){
    if(viewState === 'part-selector'){
       
        return(<PartSelector setViewState={setViewState} selectedParts={selectedParts} setSelectedParts={setSelectedParts} partLinks={partLinks}/>)
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




/* 

const [partLinks, setPartLinks] = useState([
    {
        partCategory: 'cpu',
        parts: cpuParts,
        selected: false,

    },
    {
        partCategory: 'motherboard',
        parts: motherBoardParts,
        selected: false,

    },
    {
        partCategory: 'graphics card',
        parts: graphicsParts,
        selected: false,

    },
    {
        partCategory: 'memory',
        parts: motherBoardParts,
        selected: false,

    },
    {
        partCategory: 'storage',
        parts: motherBoardParts,
        selected: false,

    }
    ,
    {
        partCategory: 'power supply',
        parts: motherBoardParts,
        selected: false,

    },
    {
        partCategory: 'case',
        parts: motherBoardParts,
        selected: false,

    },
    {
        partCategory: 'peripherals',
        parts: motherBoardParts,
        selected: false,

    }
])*/