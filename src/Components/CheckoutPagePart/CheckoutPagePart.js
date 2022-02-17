import React from "react";

const CheckoutPagePart = (props) => {
	//console.log(props);
	//console.log(props.data.partCategory);

	let selectedIndex = 0;

	if (props.selectedParts.length > 0) {
		let i;
		for (i = 0; i < props.selectedParts.length; i++) {
			if (props.data.partCategory === props.selectedParts[i].item.type) {
				selectedIndex = i;
			} else {
			}
		}
	}

	function removeSelectedPart() {
		let thePartLinks = [...props.partLinks];
		thePartLinks[props.index].selected = false;
		console.log(selectedIndex);
		console.log(thePartLinks);
		props.removeSelectedPart(
			props.selectedParts[selectedIndex].item.name,
			thePartLinks
		);
	}

	if (
		props.selectedParts.filter(
			(part) => part.item.type === props.data.partCategory
		).length > 0
	) {
		return (
			<div className="checkout-page-part-wrapper">
				<div className="checkout-page-part-header">
					{props.data.partCategory.toUpperCase()}
				</div>

				<div className="checkout-page-part-container">
					<div className="checkout-page-part-image-container">
						<div
							className="checkout-page-part-image"
							style={{
								backgroundImage: `url(${props.selectedParts[selectedIndex].item.imageURL})`,
							}}
						></div>
					</div>
					<div className="checkout-page-part-details-wrapper">
						<div className="checkout-page-part-name">
							{props.selectedParts[selectedIndex].item.name}
						</div>
						<div className="checkout-page-part-highlights-container">
							{props.selectedParts[selectedIndex].item.highlights.map(
								(highlight, index) => (
									<div className="checkout-page-part-highlight">
										{highlight.key + ":" + " " + highlight.value}
									</div>
								)
							)}
						</div>
					</div>
					<div className="checkout-page-part-price">
						<div className="checkout-page-part-price-amount">
							${props.selectedParts[selectedIndex].item.price}
						</div>
					</div>
					<button
						className="checkout-page-remove-button"
						onClick={removeSelectedPart}
					>
						REMOVE
					</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="checkout-page-part-wrapper">
				<div className="checkout-page-part-header">
					{props.data.partCategory.toUpperCase()}
				</div>

				<div
					className="checkout-page-part-container"
					onClick={() => {
						props.setViewState({ view: "part-selector", index: props.index });
					}}
				>
					SELECT PART +
				</div>
			</div>
		);
	}

	return <div></div>;
};

export default CheckoutPagePart;

/*let i, j;
		for (i = 0; i < props.partLinks.length; i++) {
			for (j = 0; j < props.selectedParts.length; j++) {
				if (
					props.partLinks[i].partCategory === props.selectedParts[j].item.type
				) {
					return (
						<div className="checkout-page-part-wrapper">
							<div className="checkout-page-part-header">
								{props.selectedParts[j].item.type.toUpperCase()}
							</div>

							<div className="checkout-page-part-container">
								<div className="checkout-page-part-image-container">
									<div
										className="checkout-page-part-image"
										style={{
											backgroundImage: `url(${props.selectedParts[j].item.imageURL})`,
										}}
									></div>
								</div>
								<div className="checkout-page-part-details-wrapper">
									<div className="checkout-page-part-name">
										{props.selectedParts[j].item.name}
									</div>
									<div className="checkout-page-part-highlights-container">
										{props.selectedParts[j].item.highlights.map(
											(highlight, index) => (
												<div className="checkout-page-part-highlight">
													{highlight.key + ":" + " " + highlight.value}
												</div>
											)
										)}
									</div>
								</div>
								<div className="checkout-page-part-price">
									<div className="checkout-page-part-price-amount">
										${props.selectedParts[j].item.price}
									</div>
								</div>
								<button
									className="checkout-page-remove-button"
									onClick={() => {
										console.log(props.selectedParts);
										console.log(j);
										//props.removeSelectedPart(props.selectedParts[j].item.name);
									}}
								>
									REMOVE
								</button>
							</div>
						</div>
					);
				}
			}
		}*/
