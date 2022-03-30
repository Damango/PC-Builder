import "./PartModal.css";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";

import React from "react";

const PartModal = (props) => {
	const mobileModalAnimation = useSpring({
		from: { top: 800 },
		to: { top: 0 },
	});

	let partModalRef = useRef(null);

	function closeMobileModal() {
		let mobileModal = partModalRef.current;
		mobileModal.style.transition = "0.5s";
		mobileModal.style.top = "900px";

		setTimeout(() => {
			props.setPartModal(null);
		}, 500);
	}

	function addPartToList() {
		props.listUpdater("insert", props.data);
		props.checkPartList(props.partView);

		console.log(props.partView);
	}

	function selectedButtonStyle() {
		if (props.selectedParts.length > 0) {
			let i;
			for (i = 0; i < props.selectedParts.length; i++) {
				if (props.selectedParts[i].item.name === props.data.name) {
					//alert("SELECTED");
					return { backgroundColor: "#130f40" };
				}
			}
		} else {
			return { backgroundColor: "#1774ff" };
		}
	}

	function selectedButtonTextStyle() {
		let isSelected = false;
		if (props.selectedParts.length > 0) {
			let i;
			for (i = 0; i < props.selectedParts.length; i++) {
				if (props.selectedParts[i].item.name === props.data.name) {
					//alert("OTHER TEST");
					isSelected = true;
				}
			}
		}

		if (isSelected) {
			return "SELECTED";
		} else {
			return "SELECT +";
		}
	}

	return (
		<animated.div
			className="part-modal-container"
			style={mobileModalAnimation}
			ref={partModalRef}
		>
			<div className="mobile-part-modal-container">
				<button
					className="close-part-modal-button"
					onClick={() => {
						closeMobileModal();
					}}
				>
					X
				</button>
				<div className="part-modal-title">{props.data.name}</div>
				<div className="part-modal-price">${props.data.price}</div>
				<div
					className="part-modal-image"
					style={{ backgroundImage: `url(${props.data.imageURL})` }}
				></div>
				<button
					className="part-modal-select-button"
					style={selectedButtonStyle()}
					onClick={addPartToList}
				>
					{selectedButtonTextStyle()}
				</button>

				{props.data.highlights.map((highlight) => (
					<div className="part-modal-highlight">
						{" "}
						{highlight.key}{" "}
						<span className="highlight-value">{highlight.value}</span>{" "}
					</div>
				))}
				{props.data.overView.map((row) => (
					<div className="part-modal-table-row">
						<span className="row-type">
							<span>{row.key}</span>
						</span>
						<span className="row-description">
							<span>{row.value}</span>
						</span>
					</div>
				))}
			</div>

			<div className="part-modal-left-side">
				<div className="part-modal-title">{props.data.name}</div>
				<div className="part-modal-price">${props.data.price}</div>
				<div
					className="part-modal-image"
					style={{ backgroundImage: `url(${props.data.imageURL})` }}
				></div>
				<button
					className="part-modal-select-button"
					style={selectedButtonStyle()}
					onClick={addPartToList}
				>
					{selectedButtonTextStyle()}
				</button>
			</div>

			<div className="part-modal-right-side">
				<button
					className="close-part-modal-button"
					onClick={() => {
						props.setPartModal(null);
					}}
				>
					X
				</button>

				<div className="part-modal-table-header">Specs</div>
				<div className="part-modal-highlights-container">
					{props.data.highlights.map((highlight) => (
						<div className="part-modal-highlight">
							{" "}
							{highlight.key}{" "}
							<span className="highlight-value">{highlight.value}</span>{" "}
						</div>
					))}
				</div>
				<div className="part-modal-tables-container">
					<div className="part-modal-table-header">Overview</div>
					<div className="part-modal-table">
						{props.data.overView.map((row) => (
							<div className="part-modal-table-row">
								<span className="row-type">
									<span>{row.key}</span>
								</span>
								<span className="row-description">
									<span>{row.value}</span>
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</animated.div>
	);
};

export default PartModal;
