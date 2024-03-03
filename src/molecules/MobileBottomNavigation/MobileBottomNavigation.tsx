import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import {
	IoGift,
	IoGiftOutline,
	IoHome,
	IoHomeOutline,
	IoLanguage,
	IoLanguageOutline,
	IoList,
	IoListOutline,
} from "react-icons/io5";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

export default function MobileBottomNavigation() {
	const [page, setPage] = useAtom(activePage);
	const { t: tRoute } = useTranslation("routes");

	return (
		<div className="flex justify-around h-16 border border-t-gray-200 bottom-0 w-full bg-white fixed bottom-0 ">
			<Button
				className="w-16"
				icon={page === ACTIVE_PAGE.HOME ? <IoHome /> : <IoHomeOutline />}
				onClick={() => setPage(ACTIVE_PAGE.HOME)}
				to={tRoute("wedding")}
			/>
			<Button
				className="w-16"
				icon={page === ACTIVE_PAGE.GIFT_LIST ? <IoList /> : <IoListOutline />}
				onClick={() => setPage(ACTIVE_PAGE.GIFT_LIST)}
				to={tRoute("gift-list")}
			/>
			<Button
				className="w-16"
				icon={page === ACTIVE_PAGE.GIFT_DETAIL ? <IoGift /> : <IoGiftOutline />}
				onClick={() => setPage(ACTIVE_PAGE.GIFT_DETAIL)}
				to={tRoute("gift")}
			/>
			<Button
				className="w-16"
				icon={
					page === ACTIVE_PAGE.LANGUAGES ? (
						<IoLanguage />
					) : (
						<IoLanguageOutline />
					)
				}
				onClick={() => setPage(ACTIVE_PAGE.LANGUAGES)}
				to={tRoute("languages")}
			/>
		</div>
	);
}
