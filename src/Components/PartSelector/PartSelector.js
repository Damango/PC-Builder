import React, { useState } from 'react';
import './PartSelector.css'
import PartCard from "../PartCard/PartCard"
import PartNavLink from "../PartNavLink/PartNavLink"
import PartModal from "../PartModal/PartModal"


// CPUs
import intelImage1 from "../../media/intelchip.png"
import intelImage2 from "../../media/intelchip2.png"
import intelImage3 from "../../media/intelchip3.png"
import intelImage4 from "../../media/intelchip4.png"
import ryzen9 from "../../media/ryzen9.webp"
import ryzen7 from "../../media/ryzen7.png"

// MOTHERBOARDs
import asusMotherBoard1 from "../../media/asusmotherboard1.jpg"
import asusMotherBoard2 from "../../media/asusmotherboard2.jpg"
import gigaByteMotherBoard1 from "../../media/gigabytemotherboard.jpg"
import rogStrixMotherBoard1 from "../../media/rogmotherboard1.jpg"



// GRAPHICS CARDS
import rtx3090 from "../../media/rtx3090.jpg"
import rtx3080 from "../../media/rtx3080.jpg"
import { render } from '@testing-library/react';

const PartSelector = (props) => {

    let cpuParts = [{
        name: 'Intel Core i9-9700K',
        imageURL: intelImage2,
        clockSpeed: '3.6 Ghz',
        coreCount: 8,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i7-9100K',
        imageURL: intelImage4,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'AMD Ryzen 9 3900x',
        imageURL: ryzen9,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9300K',
        imageURL: intelImage1,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'AMD Ryzen 7 3700',
        imageURL: ryzen7,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9000K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-1600K',
        imageURL: intelImage3,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9800K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-97500K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-97400K',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },]
    let motherBoardParts = [
        {
            name: 'ASUS Prime Z390-A',
            imageURL: asusMotherBoard2,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }, {
            name: 'ASUS ROG Strix B450-F',
            imageURL: asusMotherBoard1,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }
        , {
            name: 'GIGABYTE B450 PRO',
            imageURL: gigaByteMotherBoard1,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }, {
            name: 'ROG Strix Z590-E',
            imageURL: rogStrixMotherBoard1,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }, {
            name: 'GIGABYTE B450 PRO',
            imageURL: gigaByteMotherBoard1,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }, {
            name: 'ROG Strix Z590-E',
            imageURL: rogStrixMotherBoard1,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }]

    let graphicsParts = [
        {
            name: 'ASUS RTX 3090',
            imageURL: rtx3090,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        },
        {
            name: 'MSI Gaming RTX 3080',
            imageURL: rtx3080,
            clockSpeed: '3.6 Ghz',
            coreCount: 8,
            price: 339.99,
            rating: 5,
            ratingCount: 300
        }
    ]

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
    ])

    const [partView, setPartView] = useState(partLinks[0])
    const [selectedParts, setSelectedParts] = useState([])

    const [partModal, setPartModal] = useState(false)
    // const [updater, setUpdater] = useState(0)

    function changePartView(index) {

        setPartView({ parts: [] });
        setTimeout(() => {
            setPartView(partLinks[index])
        }, 10)
    }


    function listUpdater(editType, newItem) {

        if (editType === 'insert') {
            let partList = selectedParts;
            let newObject = { item: newItem }
            partList.push(newObject)
            setSelectedParts('')
            setTimeout(() => { setSelectedParts(partList) }, 10)

            console.log(selectedParts)
        }

        else if (editType === 'delete') { }

    }


    function checkPartList(object) {
        let newList = partLinks;
        let theIndex = newList.indexOf(object);
        newList[theIndex].selected = true;
        setPartLinks(newList);
        console.log(partLinks)

    }


    function renderPartModal() {
        if (partModal) {
            return <PartModal data={partModal} setPartModal={setPartModal} />
        }
    }










    return (<div className="part-selector-container">
        {renderPartModal()}

        <div className="left-side-container">
            <div className="part-nav-container">
                {partLinks.map((part, index) => <PartNavLink changePartView={changePartView} index={index} selected={part.selected} title={part.partCategory} parts={part.parts} partType={part.partCategory} selectedParts={selectedParts} />)}
                <div className="part-nav-footer">
                    <button className="view-cart-button center-x">View Cart</button>
                </div>
            </div>
        </div>

        <div className="right-side">

            <div className="part-list-header" >
                <div className="part-list-category center-y">CPU</div>
                <div className="part-search-bar "><i class="fas fa-search"></i> Search</div>
            </div>
            <div className="parts-list-container">
                {partView.parts.map((part, index) => <PartCard checkPartList={checkPartList} data={part} index={index} partView={partView} listUpdater={listUpdater} selectedParts={selectedParts} setPartModal={setPartModal} key={index} />)}

            </div>

        </div>


    </div>);
}

export default PartSelector;



/* 


  <div className="part-nav-container">
                {partLinks.map((part, index) => <PartNavLink changePartView={changePartView} index={index} selected={part.selected} title={part.partCategory} parts={part.parts} partType={part.partCategory} selectedParts={selectedParts} />)}
                <div className="part-nav-footer">
                    <button className="view-cart-button center-x">View Cart</button>
                </div>
            </div>




*/