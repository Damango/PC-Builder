import React, { useEffect, useState } from "react";
import "./PartSelector.css";
import PartCard from "../PartCard/PartCard";
import PartNavLink from "../PartNavLink/PartNavLink";
import PartModal from "../PartModal/PartModal";

import DropDownMenu from "../DropDownMenu/DropDownMenu";

import { render } from "@testing-library/react";

const PartSelector = (props) => {
	const [partView, setPartView] = useState(
		props.partLinks[props.viewIndex ? props.viewIndex : 0]
	);
	const [partModal, setPartModal] = useState(false);
	const [mobilePartModal, setMobilePartModal] = useState(false);

	const [sortSelection, setSortSelection] = useState("Price: Low to High");
	const [clearPopUp, setClearPopUp] = useState(false);
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

	function handlePartSorting(selection, parts, partListObject) {
		let partsList;
		let partCategory;
		if (parts) {
			partsList = parts;
		} else {
			partsList = [...partView.parts];
		}

		if (partListObject) {
			partsList = partListObject.parts;
			partCategory = partListObject.partCategory;
		}

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

		if (partListObject) {
			setPartView({ parts: partsList, partCategory: partCategory });
		} else {
			setPartView({ parts: partsList, partCategory: partView.partCategory });
		}

		//setPartView(partViewObject);
	}

	function changePartView(index) {
		setPartView({ parts: [], partCategory: "" });
		console.log(props.partLinks[index]);
		setTimeout(() => {
			handlePartSorting(sortSelection, [], props.partLinks[index]);
			//setPartView(props.partLinks[index]);
		}, 1);
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
								handlePartSorting={handlePartSorting}
								setSortSelection={setSortSelection}
								setMobilePartNavBar={props.setMobilePartNavBar}
								mobile={true}
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
						<button
							className="clear-pc-data-button"
							onClick={handleClearDataPopUp}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
							</svg>
							Clear PC Data
						</button>
					</div>
				</div>
			);
		}
	}

	function clearData() {
		let input = document.querySelector(".clear-data-input");
		let partLinks = props.partLinks;
		let i;
		for (i = 0; i < partLinks.length; i++) {
			partLinks[i].selected = false;
		}
		let clearedLinks = partLinks;

		if (input.value === "YES I AM SURE") {
			localStorage.setItem(
				"pc-builder-data",
				JSON.stringify({ partLinks: clearedLinks, selectedParts: [] })
			);
			props.setSelectedParts([]);
			setClearPopUp(false);
		}
	}

	function renderClearDataPopUp() {
		if (clearPopUp) {
			return (
				<div className="clear-data-pop-up-container">
					<button
						style={{
							position: "absolute",
							top: "10px",
							right: "10px",
							color: "red",
						}}
						onClick={() => {
							setClearPopUp(false);
						}}
					>
						X
					</button>
					<div
						style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}
					>
						ARE YOU SURE?
					</div>
					<div style={{ fontWeight: "bold", marginBottom: "10px" }}>
						Type "YES I AM SURE" to clear your data
					</div>
					<div
						style={{
							fontSize: "12px",
							marginTop: "10px",
							marginBottom: "20px",
						}}
					>
						THIS WILL ALSO CLEAR YOUR LOCALLY STORED DATA
					</div>
					<input className="clear-data-input" placeholder="" />
					<button className="clear-data-pop-up-button" onClick={clearData}>
						CLEAR DATA
					</button>
				</div>
			);
		}
	}

	function handleClearDataPopUp() {
		if (clearPopUp) {
			setClearPopUp(false);
		} else {
			setClearPopUp(true);
		}
	}

	return (
		<div className="part-selector-container">
			{renderClearDataPopUp()}
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
							handlePartSorting={handlePartSorting}
							setSortSelection={setSortSelection}
							sortSelection={sortSelection}
							mobile={false}
						/>
					))}
					<button
						className="clear-pc-data-button"
						onClick={handleClearDataPopUp}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
							<path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
						</svg>
						Clear PC Data
					</button>
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
							sortSelection={sortSelection}
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
