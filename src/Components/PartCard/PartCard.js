import React, {useEffect, useRef, useState} from 'react';
import { useSpring, animated } from 'react-spring'
import "./PartCard.css"

const PartCard = (props) => {


    const cardAnimation = useSpring({from:{opacity: 0}, to:{opacity: 1}, immediate: true, delay:props.index * 100 })



    const [partSelected, setPartSelected] = useState('select-button')

    useEffect(() => {

        let i;
        let selected = false;
 
        for(i = 0; i < props.selectedParts.length; i++){

            console.log(props.selectedParts[0].item)
            console.log(props.data)

            if(props.selectedParts[i].item.name === props.data.name){
                
                setPartSelected('selected-button')
                
                break;
            }

            else{
                setPartSelected('select-button');
                break;
            }
           
        }

        
        
                      
        

    }
    
    
    ,[])






    function addPartToList(){

        props.listUpdater('insert', props.data)
        setPartSelected('selected-button')

    }





    return ( <animated.div className="part-card-container"  style={cardAnimation} >
    <div className="part-name">{props.data.name}</div>
    <div className="part-image center-x" style={{backgroundImage:`url(${props.data.imageURL})` }}></div>
    <div className="feature-tags-container">
        <div className="feature-tag">3.4 Ghz</div>
        <div className="feature-tag">8 Cores</div>
    </div>
    <div className="part-price">$629.99</div>
    <div className="part-rating">
        <div className="rating-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        <div className="rating-count">2,300</div>
      
    </div>
    <button onClick={addPartToList} className={partSelected + " center-x"}>Select +</button>

</animated.div> );
}
 
export default PartCard;