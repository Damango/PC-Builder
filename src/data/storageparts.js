import samsung980 from "../media/samsung980.png";
import samsung980pro from "../media/samsung980pro.png";
import samsung870 from "../media/samsung870.png";
import wdblue from "../media/WDblue.png";
import seagate from "../media/seagate.png";
import sandisk from "../media/sandiskssd.png";
import wdbluessd from "../media/wdbluessd.png";
const storageParts = [
	{
		name: "SAMSUNG 980 M.2",
		type: "storage",
		imageURL: samsung980,
		price: 99.99,
		rating: 5,
		ratingCount: 6090,
		highlights: [
			{
				key: "Storage Size",
				value: "1 TB",
			},
			{
				key: "Read Speed",
				value: "3500 Mbs",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "NVMe 4.0",
			},
		],
		overView: [
			{ key: "Brand", value: "Samsung" },

			{ key: "Series", value: "Samsung 980 M.2" },
		],
	},
	{
		name: "SAMSUNG 980 PRO M.2",
		type: "storage",
		imageURL: samsung980pro,
		price: 109.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Storage Size",
				value: "1 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "7000Mbs",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "NVMe 4.0",
			},
		],
		overView: [
			{ key: "Brand", value: "Samsung" },

			{ key: "Series", value: "Samsung 980 Pro M.2" },
		],
	},
	{
		name: "Western Digitial Blue",
		type: "storage",
		imageURL: wdblue,
		price: 59.99,
		rating: 5,
		ratingCount: 4657,
		highlights: [
			{
				key: "Storage Size",
				value: "4 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "1300 Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Western Digital" },

			{ key: "Series", value: "WD Blue PC Hard Drive" },
		],
	},
	{
		name: "Seagate BarraCuda",
		type: "storage",
		imageURL: seagate,
		price: 69.99,
		rating: 5,
		ratingCount: 7901,
		highlights: [
			{
				key: "Storage Size",
				value: "4 TB",
			},

			{
				key: "Data Transfer Rate",
				value: "1500 Mhz",
			},
		],
		overView: [
			{ key: "Brand", value: "Sea Gate" },

			{ key: "Series", value: "ST4000DMZ04" },
		],
	},
	{
		name: "SAMSUNG 880 EVO SSD",
		type: "storage",
		imageURL: samsung870,
		price: 169.99,
		rating: 5,
		ratingCount: 6479,
		highlights: [
			{
				key: "Storage Size",
				value: "2 TB",
			},
			{
				key: "Read Speed",
				value: "960Mbs",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "Solid State",
			},
		],
		overView: [
			{ key: "Brand", value: "Samsung" },

			{ key: "Series", value: "Samsung 880 SSD" },
		],
	},
	{
		name: "Western Digital Blue SSD",
		type: "storage",
		imageURL: wdbluessd,
		price: 109.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Storage Size",
				value: "1 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "560 Mbs",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "Solid State",
			},
		],
		overView: [
			{ key: "Brand", value: "Western Digital" },

			{ key: "Series", value: "Western Digital Blue SSD" },
		],
	},
	{
		name: "SAMSUNG 1070 EVO SSD",
		type: "storage",
		imageURL: samsung870,
		price: 229.99,
		rating: 5,
		ratingCount: 1299,
		highlights: [
			{
				key: "Storage Size",
				value: "4 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "9500 Mhz",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "Solid State",
			},
		],
		overView: [
			{ key: "Brand", value: "Samsung" },

			{ key: "Series", value: "Samsung 1070 SSD" },
		],
	},
	{
		name: "Sandisk SSD",
		type: "storage",
		imageURL: sandisk,
		price: 74.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Storage Size",
				value: "1 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "535 Mbs",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "Solid State",
			},
		],
		overView: [
			{ key: "Brand", value: "Sandisk" },
			{ key: "Series", value: "Sandisk SSD" },
		],
	},
	{
		name: "SAMSUNG 870 EVO SSD",
		type: "storage",
		imageURL: samsung870,
		price: 109.99,
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Storage Size",
				value: "1 TB",
			},
			{
				key: "Data Transfer Rate",
				value: "3500 Mhz",
			},
			{
				key: "Connectivity",
				value: "SATA",
			},
			{
				key: "Interface",
				value: "Solid State",
			},
		],
		overView: [
			{ key: "Brand", value: "Samsung" },

			{ key: "Series", value: "SAMSUNG 870 EVO" },
		],
	},
];

storageParts.sort((a, b) => (a.price > b.price ? 1 : -1));

export default storageParts;
