import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import Wedding from "../../assets/png/wedding.png";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import ACTIVE_PAGE from "../MobileNavigation/constants";

export default function Home() {
	const [, setHomepage] = useAtom(activePage);
	const { t } = useTranslation();

	setHomepage(ACTIVE_PAGE.HOME);

	return (
		<div className="h-full">
			<Image src={Wedding} alt={t("Wedding")} className="w-full max-h-96" />
			<h1 className="p-4 bold text-2xl">Clara & Pedro</h1>
			<p className="pt-4 pl-4">Saturday, June 23, 2022</p>
			<p className="p-4 pt-2">Bauru - SP</p>
			<div className="flex w-full justify-center pt-7">
				<Button
					className="w-3/4 bg-indigo-400 text-white rounded-full h-10"
					text="Nos de um"
					onClick={() => setHomepage(ACTIVE_PAGE.GIFT_LIST)}
				/>
			</div>
		</div>
	);
}
