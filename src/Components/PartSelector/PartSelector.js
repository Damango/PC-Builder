import React, { useEffect, useState } from "react";
import "./PartSelector.css";
import PartCard from "../PartCard/PartCard";
import PartNavLink from "../PartNavLink/PartNavLink";
import PartModal from "../PartModal/PartModal";

import { render } from "@testing-library/react";

const PartSelector = (props) => {
	useEffect(() => {
		let thePartLinks = [...props.partLinks];
		let i, j;
		for (i = 0; i < thePartLinks.length; i++) {
			if (props.selectedParts.length === 0) {
				thePartLinks[i].selected = false;
			}
			for (j = 0; j < props.selectedParts.length; j++) {
				console.log(thePartLinks[i].partCategory);
				console.log(props.selectedParts[i]);
				if (thePartLinks[i].partCategory === props.selectedParts[j].item.type) {
					thePartLinks[i].selected = true;
					break;
				} else {
					thePartLinks[i].selected = false;
				}
			}
		}

		props.setPartLinks(thePartLinks);
		console.log(partView);
	}, []);

	const [partView, setPartView] = useState(
		props.partLinks[props.viewIndex ? props.viewIndex : 0]
	);
	const [partModal, setPartModal] = useState(false);
	const [mobilePartModal, setMobilePartModal] = useState(false);

	function changePartView(index) {
		setPartView({ parts: [], partCategory: "" });
		setTimeout(() => {
			setPartView(props.partLinks[index]);
		}, 10);
	}

	function listUpdater(editType, newItem) {
		if (editType === "insert") {
			let i;

			let partList = [...props.selectedParts];
			let newObject = { item: newItem };
			let alreadySelected = false;

			for (i = 0; i < partList.length; i++) {
				if (partList[i].item.type === newItem.type) {
					partList[i].item = newItem;
					alreadySelected = true;
				}
			}
			if (!alreadySelected) {
				partList.push(newObject);
			}
			props.setSelectedParts(partList);
			console.log(props.selectedParts);
		} else if (editType === "delete") {
		}
	}

	function checkPartList(object) {
		let newList = props.partLinks;
		let theIndex = newList.indexOf(object);
		newList[theIndex].selected = true;
		props.setPartLinks(newList);
		console.log(props.partLinks);
	}

	function renderPartModal() {
		if (partModal) {
			return <PartModal data={partModal} setPartModal={setPartModal} />;
		}
	}

	function renderMobilePartNavBar() {
		if (props.mobilePartNavBar) {
			return (
				<div className="mobile-part-nav-wrapper">
					<div
						className="mobile-part-nav-overlay"
						onClick={() => {
							props.setMobilePartNavBar(false);
						}}
					></div>
					<div className="mobile-part-nav-container">
						{props.partLinks.map((part, index) => (
							<PartNavLink
								changePartView={changePartView}
								index={index}
								selected={part.selected}
								title={part.partCategory}
								parts={part.parts}
								partType={part.partCategory}
								selectedParts={props.selectedParts}
								partView={partView}
							/>
						))}
						<div className="part-nav-footer">
							<button
								className="view-cart-button center-x"
								onClick={() => {
									props.setViewState("checkout-page");
								}}
							>
								View Cart
							</button>
						</div>
					</div>
				</div>
			);
		}
	}

	return (
		<div className="part-selector-container">
			{renderMobilePartNavBar()}
			{renderPartModal()}

			<div className="left-side-container">
				<div className="part-nav-container">
					{props.partLinks.map((part, index) => (
						<PartNavLink
							changePartView={changePartView}
							index={index}
							selected={part.selected}
							title={part.partCategory}
							parts={part.parts}
							partType={part.partCategory}
							selectedParts={props.selectedParts}
							partView={partView}
						/>
					))}
					<div className="part-nav-footer">
						<button
							className="view-cart-button center-x"
							onClick={() => {
								props.setViewState("checkout-page");
							}}
						>
							View Cart
						</button>
					</div>
				</div>
			</div>
			<div className="right-side">
				<div className="part-list-header">
					<div className="part-list-category center-y">
						{partView.partCategory.toUpperCase()}
					</div>
					<div className="part-search-bar ">
						<i class="fas fa-search"></i> Search
					</div>
				</div>
				<div className="parts-list-container">
					{partView.parts.map((part, index) => (
						<PartCard
							checkPartList={checkPartList}
							data={part}
							index={index}
							partView={partView}
							listUpdater={listUpdater}
							selectedParts={props.selectedParts}
							setPartModal={setPartModal}
							mobilePartModal={mobilePartModal}
							setMobilePartModal={setMobilePartModal}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PartSelector;
