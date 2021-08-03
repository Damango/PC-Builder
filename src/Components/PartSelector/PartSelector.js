import React, {useState} from 'react';
import './PartSelector.css'
import PartCard from "../PartCard/PartCard"
import intelImage1 from "../../media/intelchip.png"
import intelImage2 from "../../media/intelchip2.png"
import intelImage3 from "../../media/intelchip3.png"
import intelImage4 from "../../media/intelchip4.png"
import ryzen9 from "../../media/ryzen9.webp"
import ryzen7 from "../../media/ryzen7.png"

const PartSelector = (props) => {

    let cpuParts = [{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i7-9700K',
        imageURL: intelImage4,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'AMD Ryzen 9 3900x',
        imageURL: ryzen9,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage1,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'AMD Ryzen 7 3700',
        imageURL: ryzen7,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-1600K',
        imageURL: intelImage3,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },]
    let motherBoardParts = ['motherboard','motherboard','motherboard','motherboard']

    const [partView, setPartView] = useState(cpuParts)
  



    function changePartView(parts){

        setPartView([]); 

        setTimeout(() => {
            setPartView(parts)
           
        }, 10)

        
        

    }


  




    



    return ( <div className="part-selector-container">
 <div className="view-header"></div>
    <div className="left-side-container">
       
        

        <div className="part-nav-container center-y">
            <div className="part-nav-link" onClick={() => {changePartView(cpuParts)}}><i class="fas fa-check-circle"></i>CPU</div>
            <div className="part-nav-link" onClick={() => {changePartView(motherBoardParts)}}><i class="fas fa-plus-circle"></i>Motherboard</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Graphics Card</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Memory</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Storage</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Power Supply</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Case</div>
            <div className="part-nav-link"><i class="fas fa-plus-circle"></i>Peripherals</div>

            <div className="part-nav-footer">
                <button className="view-cart-button center-x">View Cart</button>
            </div>
        </div>

    </div>

    <div className="right-side">

        <div className="part-list-header" >
            <div className="part-list-category">CPU</div>
            <div className="part-search-bar center-y"><i class="fas fa-search"></i> Search</div>
        </div>
        <div className="parts-list-container">
        {partView.map((part, index) => <PartCard data={part} index={index}/>)}
            
        </div>

    </div>


    </div> );
}
 
export default PartSelector;