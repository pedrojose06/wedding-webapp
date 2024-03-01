import { useTranslation } from "react-i18next";
import giftList from "../../assets/json/gifts/gift-list.json";
import { IGifts } from "../../atoms/GiftChosen/activeGift";
import Gift from "../../molecules/Gift/Gift";
import { Each } from "../../utils/Each";

function GiftList() {
	const { t } = useTranslation();
	const gifts = giftList as IGifts[];
	return (
		<div className="pb-20">
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
		</div>
	);
}

export default GiftList;
