import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/gift.json";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

export default function GiftNotChosen() {
	const [, setPage] = useAtom(activePage);
	const { t } = useTranslation();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="flex flex-col items-center justify-center h-4/5">
			<Lottie options={defaultOptions} height={200} width={200} />
			<h1 className="p-4 bold text-2xl text-center">
				{t("NenhumPresenteEscolhido")}
			</h1>
			<Button
				className="bg-gray-200 h-9 w-fit border rounded-3xl px-4"
				text={t("IrParaListaDePresentes")}
				onClick={() => setPage(ACTIVE_PAGE.GIFT_LIST)}
				to={t("gift-list")}
			/>
			<a
				className="text-gray-200 text-sm absolute bottom-20 text-right w-full pr-4"
				href="https://lordicon.com/"
			>
				Icon by Lordicon.com
			</a>
		</div>
	);
}
