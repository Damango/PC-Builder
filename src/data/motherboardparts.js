import asusMotherBoard1 from "../media/asusmotherboard1.jpg"
import asusMotherBoard2 from "../media/asusmotherboard2.jpg"
import gigaByteMotherBoard1 from "../media/gigabytemotherboard.jpg"
import rogStrixMotherBoard1 from "../media/rogmotherboard1.jpg"


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

    export default motherBoardParts