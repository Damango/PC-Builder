import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./PartCard.css"

const PartCard = (props) => {


    const cardAnimation = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, immediate: true, delay: props.index * 100 })

    const [partSelected, setPartSelected] = useState('')



    function addPartToList() {

        
        props.listUpdater('insert', props.data)
        setPartSelected('selected-')
        props.checkPartList(props.partView)
      
        

    }

    function renderSelectionStyle(){

        let selected = ''

        if(props.selectedParts.length > 0){
            let i;
            for (i = 0; i < props.selectedParts.length; i++) {
                if (props.selectedParts[i].item.name === props.data.name) {
                   selected = 'selected-'
                }
            }
        }
        else{
           selected = ''
        }
        return(selected)
    }





    return (<animated.div className={ renderSelectionStyle() + "part-card-container"} style={cardAnimation}>
        <div className="part-card-wrapper"  onClick={() => { props.setPartModal(props.data) }}></div>
        <div className="part-card-mobile-wrapper" onClick={() => { props.setPartModal(props.data) }}></div>
        <div className="part-name">{props.data.name}</div>
       
        <div className="part-image center-x" style={{ backgroundImage: `url(${props.data.imageURL})` }}></div>
        <div className="feature-tags-container">
            <div className="feature-tag">3.4 Ghz</div>
            <div className="feature-tag">8 Cores</div>
        </div>
        <div className="part-price">${props.data.price}</div>
        <div className="part-rating">
            <div className="rating-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <div className="rating-count">{props.data.ratingCount}</div>

        </div>
        <button onClick={() => {(addPartToList() )}} className={renderSelectionStyle() + "select-button center-x"}>Select +</button>

    </animated.div>);
}

export default PartCard;