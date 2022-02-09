import React from "react";
import { useState, useEffect, useRef } from "react";
import "./CheckoutPage.css";

const CheckoutPage = (props) => {
	useEffect(() => {}, []);

	const mobileSummaryElement = useRef(null);

	const checkoutParts = useState(props.partLinks);

	const [mobileSummary, setMobileSummary] = useState(false);

	function calculateTotal() {
		let total = 0;
		let i;
		for (i = 0; i < props.selectedParts.length; i++) {
			total += props.selectedParts[i].item.price;
		}

		return total;
	}

	function renderItemSections() {
		let checkoutArray = checkoutParts[0].map((part, index) => (
			<div className="checkout-page-part-wrapper">
				<div className="checkout-page-part-header">
					{part.partCategory.toUpperCase()}
				</div>
				<div
					className="checkout-page-part-container"
					onClick={() => {
						props.setViewState({ view: "part-selector", index: index });
					}}
				>
					SELECT PART +
				</div>
			</div>
		));

		let i, j;
		for (i = 0; i < checkoutParts[0].length; i++) {
			for (j = 0; j < props.selectedParts.length; j++) {
				if (
					checkoutParts[0][i].partCategory === props.selectedParts[j].item.type
				) {
					checkoutArray[i] = (
						<div className="checkout-page-part-wrapper">
							<div className="checkout-page-part-header">
								{props.selectedParts[j].item.type.toUpperCase()}
							</div>
							<div className="checkout-page-part-container">
								{props.selectedParts[j].item.name}
							</div>
						</div>
					);
				}
			}
		}

		console.log(checkoutArray);

		return checkoutArray;
	}

	function handleMobileCheckout() {
		let mobileCheck = document.querySelector(".mobile-checkout-button");

		if (mobileCheck) {
			if (mobileSummary) {
				setMobileSummary(false);
				mobileSummaryElement.current.style.bottom = "-100%";
			} else if (mobileSummary === false) {
				mobileSummaryElement.current.style.bottom = "0%";
				setMobileSummary(true);
			}
		}
	}

	return (
		<div className="checkout-page-container">
			<div className="checkout-page-parts-list-container">
				<div className="checkout-page-parts-list-header">
					Shopping Cart ({props.selectedParts.length})
				</div>

				<div className="checkout-page-parts-list-wrapper">
					{renderItemSections()}
				</div>
			</div>
			<div className="mobile-checkout-button" onClick={handleMobileCheckout}>
				CHECK OUT
			</div>
			<div
				className="checkout-page-summary-container"
				ref={mobileSummaryElement}
			>
				<div className="close-summary-button" onClick={handleMobileCheckout}>
					CLOSE
				</div>
				<div className="item-summary-container">
					<div className="item-summary-header">Summary</div>
					<div className="item-summary-list">
						{props.selectedParts.map((part) => (
							<div className="item-summary-item">
								<span>{part.item.name}</span>
								<span>{part.item.price}</span>
							</div>
						))}
					</div>
				</div>
				<div className="summary-footer">
					<div className="summary-footer-total-and-count">
						<span>Item(s): {props.selectedParts.length}</span>
						<span>{calculateTotal()}</span>
					</div>
					<button className="checkout-button">CHECKOUT</button>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
