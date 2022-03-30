import rtx3090 from "../media/rtx3090.png";
import rtx3080 from "../media/rtx3080.png";
import rtx3070 from "../media/rtx3070.png";
import rtx3060 from "../media/rtx3060.png";
import rtx3060ti from "../media/rtx3060ti.png";
import rtx3070ti from "../media/rtx3070ti.png";

import amdrx6800 from "../media/amdrx6800.png";
import amdrx6900xt from "../media/amdrx6900xt.png";

let graphicsCardParts = [
	{
		name: "RTX 3090",
		type: "graphics card",
		imageURL: rtx3090,
		price: 1899.99,
		rating: 5,
		ratingCount: 1781,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6X",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "24GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3090" },
		],
	},
	{
		name: "RTX 3080",
		type: "graphics card",
		imageURL: rtx3080,
		price: 799.99,
		rating: 5,
		ratingCount: 1245,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6X",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "12GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3080" },
		],
	},
	{
		name: "RTX 3060",
		type: "graphics card",
		imageURL: rtx3060,
		price: 569.99,
		rating: 5,
		ratingCount: 4187,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "8GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3060" },
		],
	},
	{
		name: "RTX 3070",
		imageURL: rtx3070,
		type: "graphics card",
		price: 999.99,
		rating: 5,
		ratingCount: 1305,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6X",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "8GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3070" },
		],
	},
	{
		name: "AMD RX 6900",
		imageURL: amdrx6900xt,
		type: "graphics card",
		price: 689.99,
		rating: 5,
		ratingCount: 2119,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "16GB",
			},
		],
		overView: [
			{ key: "Brand", value: "AMD" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "AMD RX 6900" },
		],
	},
	{
		name: "AMD RX 6800",
		imageURL: amdrx6800,
		type: "graphics card",
		price: 919.99,
		rating: 5,
		ratingCount: 645,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "16GB",
			},
		],
		overView: [
			{ key: "Brand", value: "AMD" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "AMD RX 6800" },
		],
	},
	{
		name: "AMD RX 6900XT",
		imageURL: amdrx6900xt,
		price: 1449.05,
		type: "graphics card",
		rating: 5,
		ratingCount: 182,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "16GB",
			},
		],
		overView: [
			{ key: "Brand", value: "AMD" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "AMD RX 6900XT" },
		],
	},
	{
		name: "RTX 3060ti",
		imageURL: rtx3060ti,
		type: "graphics card",
		price: 738.24,
		rating: 5,
		ratingCount: 1233,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "8GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3060ti" },
		],
	},
	{
		name: "RTX 3070ti",
		imageURL: rtx3070ti,
		type: "graphics card",
		price: 898.98,
		rating: 5,
		ratingCount: 588,
		highlights: [
			{
				key: "GRAM",
				value: "GDDR6X",
			},
			{
				key: "Display Type",
				value: "HDMI",
			},
			{
				key: "RAM Size",
				value: "8GB",
			},
		],
		overView: [
			{ key: "Brand", value: "NVIDIA" },
			{ key: "Highest Resolution", value: "8K" },
			{ key: "Series", value: "RTX 3070ti" },
		],
	},
];
graphicsCardParts.sort((a, b) => (a.price > b.price ? 1 : -1));

export default graphicsCardParts;
