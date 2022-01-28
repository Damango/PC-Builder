import React from 'react';
import "./PCBuilder.css"
import PartSelector from "../PartSelector/PartSelector"
import CheckoutPage from "../CheckoutPage/CheckoutPage"
import cpuParts from "../../data/cpuparts.js"
import motherBoardParts from "../../data/motherboardparts"
import graphicsCardParts from "../../data/graphicscardparts"
import memoryParts from "../../data/memoryparts"
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
        parts: memoryParts,
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


const [mobilePartNavBar, setMobilePartNavBar] = useState(false)
const [mobileNavBar, setMobileNavBar] = useState(false)


const [selectedParts, setSelectedParts] = useState([])


function removeSelectedPart(index){
    let newSelectedParts = [...selectedParts];
    newSelectedParts.splice(index, 1)
    setSelectedParts(newSelectedParts)
}

function mobileNavBarStyles(page) {
    if(page === viewState){
        return('-active')
    }
    else{
        return('')
    }
}


function renderMobileNavBar(){
    if(mobileNavBar){
        return( <div className="mobile-nav-bar-wrapper">
        <div className="mobile-nav-bar-container">
            <div className="mobile-nav-overlay" onClick={() => {setMobileNavBar(false)}}></div>
            <div className="mobile-nav-links-container">
                <div className={"mobile-nav-link" + mobileNavBarStyles('part-selector')} onClick={() => {setViewState('part-selector')}}>Part Selector</div>
                <div className={"mobile-nav-link" + mobileNavBarStyles('community')} >Community Builds</div>
                <div className={"mobile-nav-link" + mobileNavBarStyles('completed')} >Finished Builds</div>
                <div className={"mobile-nav-link" + mobileNavBarStyles('checkout-page')} onClick={() => {setViewState('checkout-page')}}>View Cart</div>
            </div>
        </div>
    </div>)
       
    }
}


function renderViewState(){
    if(viewState === 'part-selector'){
       
        return(<PartSelector setViewState={setViewState} selectedParts={selectedParts} setSelectedParts={setSelectedParts} partLinks={partLinks} setPartLinks={setPartLinks} removeSelectedPart={removeSelectedPart} mobilePartNavBar={mobilePartNavBar} setMobilePartNavBar={setMobilePartNavBar} mobileNavBar={mobileNavBar} setMobileNavBar={setMobileNavBar}/>)
    }
    else if(viewState === 'checkout-page'){
        return(<CheckoutPage partLinks={partLinks} setPartLinks={setPartLinks} selectedParts={selectedParts} setSelectedParts={setSelectedParts} removeSelectedPart={removeSelectedPart}/>)
    }
}



    return (<div className="pc-builder-app-container">

        {renderMobileNavBar()}
        
        <div className="main-nav-bar-container">
            <div className="main-nav-bar-wrapper center-all">
                <div className="main-nav-bar-button" onClick={() => {setViewState('part-selector')}}>Part Selector</div>
                <div className="main-nav-bar-button">Community Builds</div>
                <div className="main-nav-bar-button">Finished Builds</div>
            </div>
            <button className="nav-view-cart-button" onClick={() => {setViewState('checkout-page')}} >View Cart</button>
        </div>

        <div className="mobile-header-container">
            <div className="mobile-header-wrapper">
                <div className="mobile-nav-bar-parts-button" onClick={() => { (mobilePartNavBar ? setMobilePartNavBar(false) : setMobilePartNavBar(true));  }}><i class="fas fa-microchip" ></i></div>

                <div className="mobile-nav-bar-menu-button" onClick={() => { (mobileNavBar ? setMobileNavBar(false) : setMobileNavBar(true));console.log('clicked' + ' ' + mobileNavBar) }}><i class="fas fa-bars"></i></div>
            </div>

        </div>


        <div className="main-view-container">
           {renderViewState()}
        </div>
    </div>);
}

export default PCBuilder;
