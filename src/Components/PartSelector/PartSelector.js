import React, {useState} from 'react';
import './PartSelector.css'
import PartCard from "../PartCard/PartCard"

const PartSelector = (props) => {

    let cpuParts = [{
        name: 'Intel Core i7-9700K',
        imageClass: 'intel-1',
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }]
    let motherBoardParts = ['motherboard','motherboard','motherboard','motherboard','motherboard','motherboard']

    const [partView, setPartView] = useState(cpuParts)
  



    function changePartView(){

    }


  



    



    return ( <div className="part-selector-container">

    <div className="left-side-container">
        

        <div className="part-nav-container center-y">
            <div className="part-nav-link" onClick={() => {setPartView(motherBoardParts)}}>CPU</div>
            <div className="part-nav-link">Motherboard</div>
            <div className="part-nav-link">Graphics Card</div>
            <div className="part-nav-link">Power Supply</div>
            <div className="part-nav-link">Case</div>

            <div className="part-nav-footer">
                <button>View Cart</button>
            </div>
        </div>

    </div>

    <div className="right-side">

        <div ></div>CPU

       

        <div className="parts-list-container">
        {partView.map((part) => <PartCard />)}
            
        </div>

    </div>


    </div> );
}
 
export default PartSelector;