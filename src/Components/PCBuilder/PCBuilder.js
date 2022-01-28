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
    console.log(index)
    newSelectedParts.splice(index, 1)
    //console.log(newSelectedParts)
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
    if(typeof viewState === 'object' && viewState.view === 'part-selector'){

        return(<PartSelector viewIndex={viewState.index} setViewState={setViewState} selectedParts={selectedParts} setSelectedParts={setSelectedParts} partLinks={partLinks} setPartLinks={setPartLinks} removeSelectedPart={removeSelectedPart} mobilePartNavBar={mobilePartNavBar} setMobilePartNavBar={setMobilePartNavBar} mobileNavBar={mobileNavBar} setMobileNavBar={setMobileNavBar}/>)

    }
    if(viewState === 'part-selector'){
       
        return(<PartSelector setViewState={setViewState} selectedParts={selectedParts} setSelectedParts={setSelectedParts} partLinks={partLinks} setPartLinks={setPartLinks} removeSelectedPart={removeSelectedPart} mobilePartNavBar={mobilePartNavBar} setMobilePartNavBar={setMobilePartNavBar} mobileNavBar={mobileNavBar} setMobileNavBar={setMobileNavBar}/>)
    }
    else if(viewState === 'checkout-page'){
        return(<CheckoutPage partLinks={partLinks} setPartLinks={setPartLinks} selectedParts={selectedParts} setSelectedParts={setSelectedParts} removeSelectedPart={removeSelectedPart} setViewState={setViewState}/>)
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
                <svg className="logo" id="logo-39" width="35" height="25" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z" fill="#A5B4FC" class="ccompli2"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z" fill="#4F46E5" class="ccustom"></path> <path d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z" fill="#A5B4FC" class="ccompli2" fill-opacity="0.3"></path> </svg>
                <div className="mobile-nav-bar-menu-button" onClick={() => { (mobileNavBar ? setMobileNavBar(false) : setMobileNavBar(true));console.log('clicked' + ' ' + mobileNavBar) }}><i class="fas fa-bars"></i></div>
            </div>

        </div>


        <div className="main-view-container">
           {renderViewState()}
        </div>
    </div>);
}

export default PCBuilder;
