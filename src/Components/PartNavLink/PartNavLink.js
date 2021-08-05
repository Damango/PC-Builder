import React, {useState} from 'react';
import "./PartNavLink.css"

const PartNavLink = (props) => {


    let checkMark = <i class="fas fa-check-circle"></i>
    let plusSign = <i class="fas fa-plus-circle"></i>


const [complete, setComplete] = useState(plusSign)

function partViewHandler() {
    props.changePartView(props.index)
}


function completeHandler(){

    if(props.selected){
        return(checkMark)
    }
    else{
        return(plusSign)
    }





    
}









    return ( <div className="part-nav-link" onClick={partViewHandler}>{completeHandler()}{props.title.toUpperCase()}</div> );
}
 
export default PartNavLink;


//<button onClick={() => {console.log(props.selectedParts)}}>sadf</button>