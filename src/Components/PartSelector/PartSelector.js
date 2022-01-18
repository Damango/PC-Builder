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
        type: 'cpu',
        imageURL: intelImage2,
        price: 439.99,
        rating: 5,
        ratingCount: 300,
        highlights: [
            {
                key: 'Clock Speed',
                value: '4.6 GHz'
            },
            {
                key: 'Core Count',
                value: '12 Cores'
            },  
            {
                key: 'Thread Count',
                value: '20 Threads'
            },
            {
                key: 'L2 Cache',
                value: '12MB'
            },
            {
                key: 'L3 Cache',
                value: '25MB'
            }
        ],
        overView: [
            {key: 'Brand', value: 'Intel'},
            {key: 'Processor Type', value: 'Desktop'},
            {key: 'Series', value: 'Core i7 12th Gen'}
        ]
    }, {
        name: 'Intel Core i7-9100K',
        imageURL: intelImage4,
        type: 'cpu',
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'AMD Ryzen 9 3900x',
        type: 'cpu',
        imageURL: ryzen9,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9300K',
        type: 'cpu',
        imageURL: intelImage1,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'AMD Ryzen 7 3700',
        type: 'cpu',
        imageURL: ryzen7,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9000K',
        type: 'cpu',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-1600K',
        type: 'cpu',
        imageURL: intelImage3,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-9800K',
        type: 'cpu',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-97500K',
        type: 'cpu',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    }, {
        name: 'Intel Core i9-97400K',
        type: 'cpu',
        imageURL: intelImage2,
        price: 339.99,
        rating: 5,
        ratingCount: 300
    },]
    let motherBoardParts = [
        {
            name: 'ASUS Prime Z390-A',
            type: 'motherboard',
            imageURL: asusMotherBoard2,
            price: 139.99,
            rating: 5,
            ratingCount: 300,
            highlights: [
                {
                    key: 'Clock Speed',
                    value: '4.6 GHz'
                },
                {
                    key: 'Core Count',
                    value: '12 Cores'
                },  
                {
                    key: 'Thread Count',
                    value: '20 Threads'
                },
                {
                    key: 'L2 Cache',
                    value: '12MB'
                },
                {
                    key: 'L3 Cache',
                    value: '25MB'
                }
            ],
            overView: [
                {key: 'Brand', value: 'Intel'},
                {key: 'Processor Type', value: 'Desktop'},
                {key: 'Series', value: 'Core i7 12th Gen'}
            ]
        },
     {
            name: 'ASUS ROG Strix B450-F',
            type: 'motherboard',
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
    const [partModal, setPartModal] = useState(false)

    function changePartView(index) {

        setPartView({ parts: [] });
        setTimeout(() => {
            setPartView(partLinks[index])
        }, 10)
    }


    function listUpdater(editType, newItem) {

        if (editType === 'insert') {

            let i;
            
            let partList = [...props.selectedParts];
            let newObject = { item: newItem };

            let alreadySelected = false;

            for(i = 0; i < partList.length; i++){
                if(partList[i].item.type === newItem.type){
                   partList[i].item = newItem
                   alreadySelected = true;
                }
            }
            if(!alreadySelected){
                partList.push(newObject)
            }
            props.setSelectedParts(partList)
            console.log(props.selectedParts)
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
            <button onClick={() => {console.log(props.selectedParts)}}>CLICK ME</button>
            <div className="part-nav-container">
                {partLinks.map((part, index) => <PartNavLink changePartView={changePartView} index={index} selected={part.selected} title={part.partCategory} parts={part.parts} partType={part.partCategory} selectedParts={props.selectedParts} />)}
                <div className="part-nav-footer">
                    <button className="view-cart-button center-x" onClick={() =>{props.setViewState('checkout-page')}}>View Cart</button>
                </div>
            </div>
        </div>

        <div className="right-side">

            <div className="part-list-header" >
                <div className="part-list-category center-y">CPU</div>
                <div className="part-search-bar "><i class="fas fa-search"></i> Search</div>
            </div>
            <div className="parts-list-container">
                {partView.parts.map((part, index) => <PartCard checkPartList={checkPartList} data={part} index={index} partView={partView} listUpdater={listUpdater} selectedParts={props.selectedParts} setPartModal={setPartModal} key={index} />)}

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