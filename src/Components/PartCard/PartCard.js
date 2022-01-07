import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring'
import "./PartCard.css"

const PartCard = (props) => {


    const cardAnimation = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, immediate: true, delay: props.index * 100 })



    const [partSelected, setPartSelected] = useState('select-button')

    useEffect(() => {

        let i;
        let selected = false;

        for (i = 0; i < props.selectedParts.length; i++) {

            console.log(props.selectedParts[0].item)
            console.log(props.data)

            if (props.selectedParts[i].item.name === props.data.name) {

                setPartSelected('selected-button')

                break;
            }

            else {
                setPartSelected('select-button');
                break;
            }

        }






    }


        , [])






    function addPartToList() {

        props.listUpdater('insert', props.data)
        setPartSelected('selected-button')
        props.checkPartList(props.partView)
      
        

    }





    return (<animated.div className="part-card-container" style={cardAnimation}>
        <div className="part-card-wrapper"  onClick={() => { props.setPartModal(props.data) }}></div>
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
        <button onClick={() => {(addPartToList() )}} className={partSelected + " center-x"}>Select +</button>

    </animated.div>);
}

export default PartCard;