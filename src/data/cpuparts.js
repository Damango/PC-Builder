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
				value: "4.9 GHz",
			},
			{
				key: "Core Count",
				value: "16 Cores",
			},
			{
				key: "Thread Count",
				value: "24 Threads",
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
		name: "Intel Core i9-9900KF",
		imageURL: intelImage4,
		type: "cpu",
		price: 529.45,
		rating: 5,
		ratingCount: 1221,
		highlights: [
			{
				key: "Clock Speed",
				value: "5.0 GHz",
			},
			{
				key: "Core Count",
				value: "8 Cores",
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
			{
				key: "Wattage",
				value: "95W",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "300 Series" },
			{ key: "Socket", value: "LGA 1151" },
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
				value: "4.6 GHz",
			},
			{
				key: "Core Count",
				value: "12 Cores",
			},
			{
				key: "Thread Count",
				value: "24 Threads",
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
			{ key: "Socket", value: "AM4" },
		],
	},
	{
		name: "Intel Core i9-10900K",
		type: "cpu",
		imageURL: intelImage1,
		price: 399.99,
		rating: 5,
		ratingCount: 128,
		highlights: [
			{
				key: "Clock Speed",
				value: "5.3 GHz",
			},
			{
				key: "Core Count",
				value: "8 Cores",
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
			{ key: "Series", value: "Core i9 10th Gen" },
			{ key: "Socket", value: "LGA1200" },
		],
	},
	{
		name: "AMD Ryzen 7 3700x",
		type: "cpu",
		imageURL: ryzen7,
		price: 372.99,
		rating: 5,
		ratingCount: 1345,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.4 GHz",
			},
			{
				key: "Core Count",
				value: "8 Cores",
			},
			{
				key: "Thread Count",
				value: "16 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "36MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "AMD Ryzen 7 3000 Series" },
			{ key: "Socket", value: "AM4" },
		],
	},
	{
		name: "AMD Ryzen 7 5800x",
		type: "cpu",
		imageURL: ryzen7,
		price: 449.99,
		rating: 5,
		ratingCount: 1147,
		highlights: [
			{
				key: "Clock Speed",
				value: "4.7 GHz",
			},
			{
				key: "Core Count",
				value: "8 Cores",
			},
			{
				key: "Thread Count",
				value: "16 Threads",
			},
			{
				key: "L2 Cache",
				value: "12MB",
			},
			{
				key: "L3 Cache",
				value: "36MB",
			},
		],
		overView: [
			{ key: "Brand", value: "AMD" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "AMD Ryzen 7 5000 Series" },
			{ key: "Socket", value: "AM4" },
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
				value: "5.2 GHz",
			},
			{
				key: "Core Count",
				value: "16 Cores",
			},
			{
				key: "Thread Count",
				value: "24 Threads",
			},
			{
				key: "L2 Cache",
				value: "24MB",
			},
			{
				key: "L3 Cache",
				value: "48MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i9 9th Gen" },
		],
	},
	{
		name: "Intel Core i40-97500K",
		type: "cpu",
		imageURL: intelImage2,
		price: 13439.99,
		rating: 5,
		ratingCount: 12000,
		highlights: [
			{
				key: "Clock Speed",
				value: "69.6 GHz",
			},
			{
				key: "Core Count",
				value: "128 Cores",
			},
			{
				key: "Thread Count",
				value: "200 Threads",
			},
			{
				key: "L2 Cache",
				value: "48GB",
			},
			{
				key: "L3 Cache",
				value: "128GB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i40 97th Gen" },
		],
	},
	{
		name: "Intel Core i9-15400K",
		type: "cpu",
		imageURL: intelImage2,
		price: 1219.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Clock Speed",
				value: "6.8 GHz",
			},
			{
				key: "Core Count",
				value: "24 Cores",
			},
			{
				key: "Thread Count",
				value: "48 Threads",
			},
			{
				key: "L2 Cache",
				value: "100MB",
			},
			{
				key: "L3 Cache",
				value: "250MB",
			},
		],
		overView: [
			{ key: "Brand", value: "Intel" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Core i9 15th Gen" },
		],
	},
];

export default cpuParts;
