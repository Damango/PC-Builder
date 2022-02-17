import React, { useEffect, useState } from "react";
import "./PartSelector.css";
import PartCard from "../PartCard/PartCard";
import PartNavLink from "../PartNavLink/PartNavLink";
import PartModal from "../PartModal/PartModal";

import DropDownMenu from "../DropDownMenu/DropDownMenu";

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
		handlePartSorting("Price: Low to High");
		console.log(partView);
	}, []);

	const [partView, setPartView] = useState(
		props.partLinks[props.viewIndex ? props.viewIndex : 0]
	);
	const [partModal, setPartModal] = useState(false);
	const [mobilePartModal, setMobilePartModal] = useState(false);

	const [sortSelection, setSortSelection] = useState("Price: Low to High");

	function handlePartSorting(selection) {
		let partsList = [...partView.parts];

		let partViewObject = partView;

		if (selection === "Price: Low to High") {
			partsList.sort((a, b) => (a.price > b.price ? 1 : -1));
		} else if (selection === "Price: High to Low") {
			partsList.sort((a, b) => (a.price > b.price ? 1 : -1));
			partsList.reverse();
		} else if (selection === "Alphabetical") {
			partsList.sort((a, b) => (a.name > b.name ? 1 : -1));
		} else if (selection === "Rating: High to Low") {
			partsList.sort((a, b) => (a.ratingCount > b.ratingCount ? 1 : -1));
			partsList.reverse();
		} else if (selection === "Rating: Low to High") {
			partsList.sort((a, b) => (a.ratingCount > b.ratingCount ? 1 : -1));
		}

		partViewObject.parts = partsList;

		console.log(partView);
		console.log(props.partLinks[0]);

		setPartView({ parts: partsList, partCategory: partView.partCategory });

		//setPartView(partViewObject);
	}

	function changePartView(index) {
		setPartView({ parts: [], partCategory: "" });
		setTimeout(() => {
			setPartView(props.partLinks[index]);
		}, 10);
	}

	function animatePopUp() {
		let popUpElement = document.querySelector(".part-change-pop-up");
		popUpElement.style.bottom = "30px";
		popUpElement.style.opacity = 1;

		setTimeout(() => {
			popUpElement.style.bottom = "-110%";
			popUpElement.style.opacity = 0;
		}, 2000);
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
			props.saveDataToLocal(partList, props.partLinks);
			animatePopUp();
		} else if (editType === "delete") {
		}
	}

	function checkPartList(object) {
		let i;

		let newList = props.partLinks;
		let theIndex;

		for (i = 0; i < newList.length; i++) {
			if (newList[i].partCategory === object.partCategory) {
				theIndex = i;
				break;
			}
		}

		console.log(object);
		console.log(newList);
		newList[theIndex].selected = true;
		console.log(newList);

		props.setPartLinks(newList);
	}

	function renderPartModal() {
		if (partModal) {
			return (
				<PartModal
					data={partModal}
					setPartModal={setPartModal}
					checkPartList={checkPartList}
					listUpdater={listUpdater}
					partView={partView}
					selectedParts={props.selectedParts}
				/>
			);
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
						<span>Sort By</span>

						<DropDownMenu
							dropDownOptions={[
								"Price: Low to High",
								"Price: High to Low",
								"Rating: Low to High",
								"Rating: High to Low",
								"Alphabetical",
							]}
							setSortSelection={setSortSelection}
							handlePartSorting={handlePartSorting}
						/>
					</div>
				</div>
				<div className="parts-list-container">
					{partView.parts.map((part, index) => (
						<PartCard
							checkPartList={checkPartList}
							listUpdater={listUpdater}
							data={part}
							index={index}
							partView={partView}
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
