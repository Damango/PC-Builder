import "./PartModal.css";


import React from 'react';



const PartModal = (props) => {

    console.log(props)
    return (<div className="part-modal-container">
        <div className="part-modal-left-side">
            <div className="part-modal-title">{props.data.name}</div>
            <div className="part-modal-price">${props.data.price}</div>
            <div className="part-modal-image" style={{ backgroundImage: `url(${props.data.imageURL})` }}></div>
            <button className="part-modal-select-button">Select +</button>
        </div>

        <div className="part-modal-right-side">
            <button className="close-part-modal-button" onClick={() => { props.setPartModal(null) }}>X</button>
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
    </div>);
}

export default PartModal;