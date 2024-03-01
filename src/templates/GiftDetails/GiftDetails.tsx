import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { ReactSVG } from "react-svg";

import Svg from "../../../src/assets/svg/empty-gift.svg";
import { activeGift } from "../../atoms/GiftChosen/activeGift";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import ACTIVE_PAGE from "../MobileNavigation/constants";

export default function GiftDetails() {
	const [chosenGift] = useAtom(activeGift);
	const [, setPage] = useAtom(activePage);
	const { t } = useTranslation();

	return (
		<>
			{Object.keys(chosenGift).length ? (
				<>
					<h1 className="p-4 bold text-2xl text-center">{chosenGift.name}</h1>
					<Image src={chosenGift.image} alt={chosenGift.name} className="" />
					<div className="text-center p-4">
						<p>
							{t("Moeda")} {chosenGift.price}
						</p>
					</div>
				</>
			) : (
				<div className="flex flex-col mt-20 items-center justify-center">
					<ReactSVG
						src={Svg}
						wrapper="span"
						className="svg-class-name flex justify-center m-4"
					/>
					<h1 className="p-4 bold text-2xl text-center">
						{t("NenhumPresenteEscolhido")}
					</h1>
					<Button
						className="bg-gray-200 h-9 w-fit border rounded-3xl px-4"
						text={t("IrParaListaDePresentes")}
						onClick={() => setPage(ACTIVE_PAGE.GIFT_LIST)}
					/>
				</div>
			)}
		</>
	);
}
