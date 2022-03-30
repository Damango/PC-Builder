import corsair600c from "../media/corsair600c.png";
import corsair4000d from "../media/corsair4000d.png";
import cmelite500 from "../media/coolermaster500elite.png";

import corsairicue4000x from "../media/corsairicue4000x.png";
import nzxth510 from "../media/nzxth510.png";
import msiforge100r from "../media/MSIforge100r.png";
import thermaltakew200 from "../media/thermaltakew200.png";
const cases = [
	{
		name: "Cooler Master Elite 500",
		type: "case",
		imageURL: cmelite500,
		price: 79.99,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Mid Tower",
			},
			{
				key: "I/O Panel",
				value: "USB 3.2",
			},
			{
				key: "Weight",
				value: "13.20 Pounds",
			},
			{
				key: "Dimensions",
				value: "18.27 x 8.03 x 17.91 inches",
			},
			{
				key: "Color",
				value: "Black",
			},
		],
		overView: [
			{ key: "Brand", value: "Cooler Master" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "Cooler Master Elite" },
		],
	},
	{
		name: "NZXT H510",
		type: "case",
		imageURL: nzxth510,
		price: 89.99,
		rating: 5,
		ratingCount: 146,
		highlights: [
			{
				key: "Size",
				value: "Mid Tower",
			},
			{
				key: "I/O Panel",
				value: "USB 3.2",
			},
			{
				key: "Weight",
				value: "13.20 Pounds",
			},
			{
				key: "Dimensions",
				value: "18.27 x 8.03 x 17.91 inches",
			},
			{
				key: "Color",
				value: "Black",
			},
		],
		overView: [
			{ key: "Brand", value: "NZXT" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "H-500 SERIES" },
		],
	},

	{
		name: "Corsair 4000D",
		type: "case",
		imageURL: corsair4000d,
		price: 104.99,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Mid Tower",
			},
			{
				key: "Airflow",
				value: "High Airflow",
			},
			{
				key: "Weight",
				value: "17.16 Pounds",
			},
			{
				key: "Dimensions",
				value: "20.47 x 9.65 x 20.47 inches",
			},
			{
				key: "Color",
				value: "Black",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "FAN SIZES", value: "35mm 30mm" },
			{ key: "Series", value: "D-SERIES" },
		],
	},
	{
		name: "Corsair D500 Obsidian",
		type: "case",
		imageURL: corsair600c,
		price: 147.75,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Mid Tower",
			},
			{
				key: "I/O Panel",
				value: "USB 3.1",
			},
			{
				key: "Weight",
				value: "15.28 Pounds",
			},
			{
				key: "Dimensions",
				value: "20.47 x 9.65 x 20.47 inches",
			},
			{
				key: "Color",
				value: "Black",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "Processor Type", value: "Desktop" },
			{ key: "Series", value: "D-SERIES" },
		],
	},
	{
		name: "Corsair iCUE 4000x",
		type: "case",
		imageURL: corsairicue4000x,
		price: 200.58,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Super Tower",
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
		name: "MSI Forge 100R",
		type: "case",
		imageURL: thermaltakew200,
		price: 89.99,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Super Tower",
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
		name: "Thermaltake W200",
		type: "case",
		imageURL: msiforge100r,
		price: 89.99,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Size",
				value: "Mid Tower",
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

cases.sort((a, b) => (a.price > b.price ? 1 : -1));

export default cases;
