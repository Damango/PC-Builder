import rtx3090 from "../media/rtx3090.jpg";
import rtx3080 from "../media/rtx3080.jpg";
import rtx3070 from "../media/rtx3070.jpg";
import rtx3060 from "../media/rtx3060.jpg";
import rtx3060ti from "../media/rtx3060ti.jpg";
import rtx3070ti from "../media/rtx3070ti.jpg";

import amdrx6800 from "../media/amdrx6800.jpg";
import amdrx6900xt from "../media/amdrx6900xt.jpg";

let graphicsCardParts = [
	{
		name: "RTX 3090",
		type: "graphics card",
		imageURL: rtx3090,
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "RTX 3080",
		type: "graphics card",
		imageURL: rtx3080,
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "RTX 3060",
		type: "graphics card",
		imageURL: rtx3060,
		price: 799.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "RTX 3070",
		imageURL: rtx3070,
		type: "graphics card",
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "AMD RX 6900XT",
		imageURL: amdrx6900xt,
		type: "graphics card",
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "AMD RX 6800",
		imageURL: amdrx6800,
		type: "graphics card",
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "AMD RX 6900XT",
		imageURL: amdrx6900xt,
		price: 139.99,
		type: "graphics card",
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "RTX 3060ti",
		imageURL: rtx3060ti,
		type: "graphics card",
		price: 861.81,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
	{
		name: "RTX 3070ti",
		imageURL: rtx3070ti,
		type: "graphics card",
		price: 139.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "20 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "25MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i7 12th Gen" },
		],
	},
];

export default graphicsCardParts;
