import hyperx1 from "../media/hyperx1.png";
import dominator from "../media/dominator.png";
import corsairvengance from "../media/corsairvengance.png";
import corsairvengancergb from "../media/vengeancergb.png";
import lpxram from "../media/lpx.png";

let memoryParts = [
	{
		name: "HyperX Fury",
		type: "memory",
		imageURL: hyperx1,
		price: 199.71,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Capacity",
				value: "32 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "3200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "HyperX" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "HyperX Fury" },
		],
	},
	{
		name: "Corsair Dominator Platinum",
		imageURL: dominator,
		type: "memory",
		price: 369.99,
		rating: 5,
		ratingCount: 566,
		highlights: [
			{
				key: "Capacity",
				value: "32 GB",
			},
			{
				key: "Memory Type",
				value: "DDR5",
			},
			{
				key: "RAM Speed",
				value: "5600Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Dominator Platinum" },
		],
	},
	{
		name: "Corsair Vengance",
		type: "memory",
		imageURL: corsairvengance,
		price: 89.99,
		rating: 5,
		ratingCount: 1862,
		highlights: [
			{
				key: "Capacity",
				value: "32 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "3200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Vengenace" },
		],
	},
	{
		name: "Corsair Dominator",
		type: "memory",
		imageURL: dominator,
		price: 180.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Capacity",
				value: "32 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "3200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Dominator" },
		],
	},

	{
		name: "HyperX Kingston",
		type: "memory",
		imageURL: hyperx1,
		price: 79.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Capacity",
				value: "16 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "3100Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Dominator" },
		],
	},
	{
		name: "Corsair Vengenace LPX",
		type: "memory",
		imageURL: lpxram,
		price: 81.99,
		rating: 5,
		ratingCount: 4133,
		highlights: [
			{
				key: "Capacity",
				value: "16 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "3200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Vengenace LPX" },
		],
	},
	{
		name: "Corsair Vengenace PRO",
		type: "memory",
		imageURL: corsairvengance,
		price: 329.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Capacity",
				value: "64 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "4200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Vengenace PRO" },
		],
	},
	{
		name: "Corsair Vengenace RGB",
		type: "memory",
		imageURL: corsairvengancergb,
		price: 239.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Capacity",
				value: "32 GB",
			},
			{
				key: "Memory Type",
				value: "DDR4",
			},
			{
				key: "RAM Speed",
				value: "4200Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },
			{ key: "PIN Count", value: "288" },
			{ key: "Series", value: "Corsair Vengenace RGB" },
		],
	},
];

memoryParts.sort((a, b) => (a.price > b.price ? 1 : -1));
export default memoryParts;
