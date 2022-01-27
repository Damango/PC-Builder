import "./PartModal.css";
import { useSpring, animated } from 'react-spring'

import React from 'react';



const PartModal = (props) => {


    const mobileModalAnimation = useSpring({ from: { top: 800 }, to: { top: 0 }})
    const cardModalAnimation = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, immediate: true})


    function closeMobileModal(){
       
        let mobileModal = document.querySelector('.part-modal-container');
        mobileModal.style.transition = '0.5s'
        mobileModal.style.top = '900px'
       
        setTimeout(() => {
            props.setPartModal(null)
        }, 500)
        
    }

    console.log(props)
    return (<animated.div className="part-modal-container" style={mobileModalAnimation} >
        <div className="mobile-part-modal-container">
        <button className="close-part-modal-button" onClick={() => { closeMobileModal() }}>X</button>
        <div className="part-modal-title">{props.data.name}</div>
            <div className="part-modal-price">${props.data.price}</div>
            <div className="part-modal-image" style={{ backgroundImage: `url(${props.data.imageURL})` }}></div>
            <button className="part-modal-select-button">Select +</button>
        </div>
        <div className="part-modal-left-side">
            <div className="part-modal-title">{props.data.name}</div>
            <div className="part-modal-price">${props.data.price}</div>
            <div className="part-modal-image" style={{ backgroundImage: `url(${props.data.imageURL})` }}></div>
            <button className="part-modal-select-button">Select +</button>
        </div>

        <div className="part-modal-right-side">
           
            <div className="part-modal-table-header">Specs</div>
            <div className="part-modal-highlights-container">

            {props.data.highlights.map((highlight) => <div className="part-modal-highlight"> {highlight.key} <span className="highlight-value">{highlight.value}</span> </div>)}



            </div>
            <div className="part-modal-tables-container">
            <div className="part-modal-table-header">Overview</div>
                <div className="part-modal-table">

                  

                {props.data.overView.map((row) =>  <div className="part-modal-table-row">
                        <span className="row-type">
                            <span>{row.key}</span>
                        </span> 
                        <span className="row-description">
                            <span>{row.value}</span>
                        </span>
                    </div>)}

                   
                   
                </div>
            </div>
        </div>
    </animated.div>);
}

export default PartModal;