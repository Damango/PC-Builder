import asusMotherBoard1 from "../media/asusmotherboard1.png";
import asusMotherBoard2 from "../media/asusmotherboard2.png";
import gigaByteMotherBoard1 from "../media/gigabytemotherboard.png";
import rogStrixMotherBoard1 from "../media/rogmotherboard1.png";
import asusB550F from "../media/asusB550-F.png";
import MSIB550F from "../media/MSIB550.png";

let motherBoardParts = [
	{
		name: "ASUS Prime Z390-A",
		type: "motherboard",
		imageURL: asusMotherBoard2,
		price: 335.01,
		rating: 5,
		ratingCount: 567,
		highlights: [
			{
				key: "Socket",
				value: "LGA 1151",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "Intel Z390",
			},
			{
				key: "Memory Speed",
				value: "4266mhz",
			},
			{
				key: "Capacity",
				value: "64GB",
			},
		],
		overView: [
			{ key: "Brand", value: "ASUS" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "Z390" },
		],
	},
	{
		name: "ASUS ROG Strix B450-F",
		type: "motherboard",
		imageURL: asusMotherBoard1,
		price: 279.99,
		rating: 5,
		ratingCount: 1418,
		highlights: [
			{
				key: "Socket",
				value: "LGA 1200",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "Intel Z590",
			},
			{
				key: "Memory Speed",
				value: "5333mhz",
			},
			{
				key: "Capacity",
				value: "128GB",
			},
		],
		overView: [
			{ key: "Brand", value: "ASUS" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "B450-F" },
		],
	},
	{
		name: "GIGABYTE B450 PRO",
		imageURL: gigaByteMotherBoard1,

		type: "motherboard",
		price: 109.99,
		rating: 5,
		ratingCount: 322,
		highlights: [
			{
				key: "Socket",
				value: "AM4",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "AMD B450",
			},
			{
				key: "Memory Speed",
				value: "3600mhz",
			},
			{
				key: "Capacity",
				value: "64GB",
			},
		],
		overView: [
			{ key: "Brand", value: "GIGABYTE" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "B450" },
		],
	},
	{
		name: "ROG Strix Z590-E",
		imageURL: rogStrixMotherBoard1,

		type: "motherboard",
		price: 139.99,
		rating: 5,
		ratingCount: 322,
		highlights: [
			{
				key: "Socket",
				value: "AM4",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "AMD B450",
			},
			{
				key: "Memory Speed",
				value: "4400mhz",
			},
			{
				key: "Capacity",
				value: "64GB",
			},
		],
		overView: [
			{ key: "Brand", value: "ROG" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "Z590" },
		],
	},
	{
		name: "ASUS ROG Strix B550-F",
		imageURL: asusB550F,
		type: "motherboard",
		price: 177.95,
		rating: 5,
		ratingCount: 798,
		highlights: [
			{
				key: "Socket",
				value: "AM4",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "AMD B550",
			},
			{
				key: "Memory Speed",
				value: "4400mhz",
			},
			{
				key: "Capacity",
				value: "64GB",
			},
		],
		overView: [
			{ key: "Brand", value: "ASUS" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "STRIX 550-F" },
		],
	},
	{
		name: "MSI MAG B550",
		imageURL: rogStrixMotherBoard1,
		price: 167.25,
		type: "motherboard",
		rating: 5,
		ratingCount: 300,
		highlights: [
			{
				key: "Socket",
				value: "AM4",
			},
			{
				key: "Memory Slot",
				value: "DDR4",
			},
			{
				key: "Chipset",
				value: "AMD B550",
			},
			{
				key: "Memory Speed",
				value: "4400mhz",
			},
			{
				key: "Capacity",
				value: "64GB",
			},
		],
		overView: [
			{ key: "Brand", value: "MSI" },
			{ key: "Devices", value: "Desktop" },
			{ key: "Series", value: "MAG B550" },
		],
	},
];

motherBoardParts.sort((a, b) => (a.price > b.price ? 1 : -1));

export default motherBoardParts;
