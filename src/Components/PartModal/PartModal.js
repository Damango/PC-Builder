import "./PartModal.css";


import React from 'react';


const PartModal = (props) => {
    return (<div className="part-modal-container">
        <div className="part-modal-left-side">
            <div className="part-modal-title">Intel i9 11000k</div>
            <div className="part-modal-image"></div>
        </div>

        <div className="part-modal-right-side">
            <button className="close-part-modal-button" onClick={() => { props.setPartModal(null) }}>X</button>
            <div className="part-modal-table-header">Highlights</div>
            <div className="part-modal-highlights-container">

                <div className="part-modal-highlight">Clock Speed: <span className="highlight-value">3.6GHz</span></div>
                <div className="part-modal-highlight">Core Count: <span className="highlight-value">12 Cores</span></div>

                <div className="part-modal-highlight">Thread Count: <span className="highlight-value">20 Threads</span></div>
                <div className="part-modal-highlight">Thread Count: <span className="highlight-value">20 Threads</span></div>
                <div className="part-modal-highlight">Thread Count: <span className="highlight-value">20 Threads</span></div>




            </div>
            <div className="part-modal-tables-container">
                <div className="part-modal-table"></div>
            </div>
        </div>
    </div>);
}

export default PartModal;