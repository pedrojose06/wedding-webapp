import { useTranslation } from "react-i18next";
import { IGifts } from "../../atoms/GiftChosen/activeGift";
import Gift from "../../molecules/Gift/Gift";
import { Each } from "../../utils/Each";

const gifts: IGifts[] = [
	{ name: "Gift 1", image: "../../../src/assets/png/wedding.png", price: 100 },
	{ name: "Gift 2", image: "../../../src/assets/png/wedding.png", price: 200 },
	{ name: "Gift 3", image: "../../../src/assets/png/wedding.png", price: 300 },
	{ name: "Gift 4", image: "../../../src/assets/png/wedding.png", price: 400 },
	{ name: "Gift 5", image: "../../../src/assets/png/wedding.png", price: 500 },
];

function GiftList() {
	const { t } = useTranslation();
	return (
		<>
			<h1 className="p-4 bold text-2xl">{t("PresentesEExperiencias")}</h1>
			<Each
				of={gifts}
				render={(item, index) => (
					<Gift
						key={index}
						name={item.name}
						image={item.image}
						price={item.price}
					/>
				)}
			/>
		</>
	);
}

export default GiftList;
