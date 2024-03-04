import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { IGifts, activeGift } from "../../atoms/GiftChosen/activeGift";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import useDataBase from "../../hooks/useDataBase";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

export default function Gift({ id }: IGifts) {
	const { t } = useTranslation();
	const { t: tRoute } = useTranslation("routes");
	const { name, image, price } = useDataBase(id);

	const [, setChosenGift] = useAtom(activeGift);
	const [, setPage] = useAtom(activePage);

	const handleGiftChosen = () => {
		setChosenGift({ id, name, image, price });
		setPage(ACTIVE_PAGE.GIFT_DETAIL);
	};

	return (
		<div className="flex justify-between px-4 pt-4 items-center">
			<div className="flex">
				<Image
					src={image}
					alt={name}
					className="h-14 w-14 object-cover rounded-lg"
				/>
				<div className="flex-col pl-4">
					<h3 className="bold text-xl">{name}</h3>
					<div className="text-indigo-400">
						{t("Moeda")} {price}
					</div>
				</div>
			</div>

			<Button
				className="bg-gray-200 h-9 w-24 border rounded-3xl"
				text={t("Presentear")}
				onClick={handleGiftChosen}
				to={`${tRoute("gift")}/${id}`}
			/>
		</div>
	);
}
