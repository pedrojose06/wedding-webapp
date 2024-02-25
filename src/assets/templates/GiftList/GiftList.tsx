interface IGifts {
	name: string;
	img: string;
	price: number;
}

const gifts: IGifts[] = [
	{ name: "Gift 1", img: "img1.jpg", price: 100 },
	{ name: "Gift 2", img: "img2.jpg", price: 200 },
	{ name: "Gift 3", img: "img3.jpg", price: 300 },
	{ name: "Gift 4", img: "img4.jpg", price: 400 },
	{ name: "Gift 5", img: "img5.jpg", price: 500 },
];

function GiftList() {
	return (
		<ul>
			{gifts.map((gift) => (
				<li>{gift.name}</li>
			))}
		</ul>
	);
}

export default GiftList;
