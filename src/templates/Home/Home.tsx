import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { IoGift } from "react-icons/io5";
import Wedding from "../../assets/png/wedding.png";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import ACTIVE_PAGE from "../MobileNavigation/constants";

export default function Home() {
	const [, setHomepage] = useAtom(activePage);
	const { t } = useTranslation();
	const { t: tRoute } = useTranslation("routes");

	setHomepage(ACTIVE_PAGE.HOME);

	return (
		<>
			<Image src={Wedding} alt={t("Casamento")} className="w-full max-h-96" />
			<h1 className="p-4 bold text-2xl">{t("Nomes")}</h1>
			<p className="pt-4 pl-4">{t("Data")}</p>
			<p className="p-4 pt-2">{t("Local")}</p>
			<div className="flex w-full justify-center pt-7">
				<Button
					className="w-3/4 bg-indigo-400 text-white rounded-full h-10 flex justify-center items-center"
					to={tRoute("gift-list")}
					icon={<IoGift className="mr-3" color="white" />}
					text={t("NosDeUmPresente")}
				/>
			</div>
		</>
	);
}
