import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import giftList from "../../assets/json/gifts/gift-list.json";
import { IGifts } from "../../atoms/GiftChosen/activeGift";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Gift from "../../molecules/Gift/Gift";
import { Each } from "../../utils/Each";
import ACTIVE_PAGE from "../MobileNavigation/constants";

function GiftList() {
	const { t } = useTranslation();
	const gifts = giftList as IGifts[];
	const [page, setPage] = useAtom(activePage);
	setPage(ACTIVE_PAGE.GIFT_LIST);

	return (
		<div className="pb-20">
			<h1 className="p-4 bold text-2xl">{t("PresentesEExperiencias")}</h1>
			<Each
				of={gifts}
				render={(item, index) => (
					<Gift
						key={index}
						id={item.id}
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
