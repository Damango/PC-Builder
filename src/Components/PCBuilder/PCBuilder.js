import React from 'react';
import "./PCBuilder.css"
import PartSelector from "../PartSelector/PartSelector"

const PCBuilder = () => {
    return ( <div className="pc-builder-app-container">
        <div className="nav-bar-container"></div>
        <div className="main-view-container center-x">
            <PartSelector />
        </div>
    </div> );
}
 
export default PCBuilder;