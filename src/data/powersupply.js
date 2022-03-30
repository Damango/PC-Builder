import corsairrmx1000x from "../media/corsairrm1000x.png";
import corsairrmx850x from "../media/corsairrm850x.png";
import evga750 from "../media/evga750.png";
import agkpowersupply from "../media/agkpowersupply.png";
import thermaltakergb from "../media/thermaltakergb.png";
import asusthor from "../media/asuspowersupply.png";

const powerSupplies = [
	{
		name: "Corsair RM1000x",
		type: "power supply",
		imageURL: corsairrmx1000x,
		price: 200.58,
		rating: 5,
		ratingCount: 702,
		highlights: [
			{
				key: "Wattage",
				value: "1000W",
			},
			{
				key: "modularity",
				value: "Fully Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },

			{ key: "Series", value: "RM1000x" },
		],
	},
	{
		name: "Corsair RM850x",
		type: "power supply",
		imageURL: corsairrmx850x,
		price: 138.99,
		rating: 5,
		ratingCount: 202,
		highlights: [
			{
				key: "Wattage",
				value: "850W",
			},
			{
				key: "modularity",
				value: "Not Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "Corsair" },

			{ key: "Series", value: "RM850x" },
		],
	},
	{
		name: "AGK 850",
		type: "power supply",
		imageURL: agkpowersupply,
		price: 79.99,
		rating: 5,
		ratingCount: 132,
		highlights: [
			{
				key: "Wattage",
				value: "850W",
			},
			{
				key: "modularity",
				value: "Fully Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "ARESGAME" },

			{ key: "Series", value: "AGK Series" },
		],
	},
	{
		name: "EVGA 750",
		type: "power supply",
		imageURL: evga750,
		price: 125.01,
		rating: 5,
		ratingCount: 1679,
		highlights: [
			{
				key: "Wattage",
				value: "750W",
			},
			{
				key: "modularity",
				value: "Semi Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "EVGA" },

			{ key: "Series", value: "EVGA 750W" },
		],
	},

	{
		name: "ASUS Rog Thor",
		type: "power supply",
		imageURL: asusthor,
		price: 308.99,
		rating: 5,
		ratingCount: 109,
		highlights: [
			{
				key: "Wattage",
				value: "1200W",
			},
			{
				key: "modularity",
				value: "Fully Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "ASUS" },

			{ key: "Series", value: "ROG-THOR-1200P" },
		],
	},
	{
		name: "Thermaltake Grand RGB",
		type: "power supply",
		imageURL: thermaltakergb,
		price: 144.99,
		rating: 5,
		ratingCount: 2664,
		highlights: [
			{
				key: "Wattage",
				value: "850W",
			},
			{
				key: "modularity",
				value: "Fully Modular",
			},
			{
				key: "Form Factor",
				value: "ATX",
			},
		],
		overView: [
			{ key: "Brand", value: "Thermaltake" },

			{ key: "Series", value: "Thermaltake Grand Series" },
		],
	},
];

powerSupplies.sort((a, b) => (a.price > b.price ? 1 : -1));

export default powerSupplies;
