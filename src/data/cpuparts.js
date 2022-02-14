import intelImage1 from "../media/intelchip.png";

import intelImage2 from "../media/intelchip2.png";
import intelImage3 from "../media/intelchip3.png";
import intelImage4 from "../media/intelchip4.png";
import ryzen9 from "../media/ryzen9.webp";
import ryzen7 from "../media/ryzen7.png";

let cpuParts = [
	{
		name: "Intel Core i9-9700K",
		type: "cpu",
		imageURL: intelImage2,
		price: 648.29,
		rating: 5,
		ratingCount: 3291,
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
		name: "Intel Core i7-9100K",
		imageURL: intelImage4,
		type: "cpu",
		price: 739.99,
		rating: 5,
		ratingCount: 1221,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "6 Cores",
			},
			{
				key: "Thread Count",
				value: "12 Threads",
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
		name: "AMD Ryzen 9 3900x",
		type: "cpu",
		imageURL: ryzen9,
		price: 539.99,
		rating: 5,
		ratingCount: 468,
		highlights: [
			{
				key: "Clock Speed",
				value: "5.2 GHz",
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
			{ key: "Brand", value: "AMD" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "AMD Ryzen 9 3000 Series" },
		],
	},
	{
		name: "Intel Core i9-9300K",
		type: "cpu",
		imageURL: intelImage1,
		price: 486.87,
		rating: 5,
		ratingCount: 128,
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
		name: "AMD Ryzen 7 3700",
		type: "cpu",
		imageURL: ryzen7,
		price: 372.99,
		rating: 5,
		ratingCount: 1345,
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
		name: "A",
		type: "cpu",
		imageURL: intelImage2,
		price: 482.9,
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
		name: "Intel Core i9-1600K",
		type: "cpu",
		imageURL: intelImage3,
		price: 157.99,
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
		name: "Intel Core i9-9800K",
		type: "cpu",
		imageURL: intelImage2,
		price: 612.99,
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
		name: "Intel Core i9-97500K",
		type: "cpu",
		imageURL: intelImage2,
		price: 439.99,
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
		name: "Intel Core i9-97400K",
		type: "cpu",
		imageURL: intelImage2,
		price: 1209.99,
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

export default cpuParts;
