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
import Button from "../../components/Button/Button";
import { activePage } from "../../atoms/Navigation/activePageATM";
import { useAtom } from "jotai";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

export default function MobileBottomNavigation() {
	const [page, setPage] = useAtom(activePage);

	return (
		<div className="flex justify-around h-16 border border-t-gray-200 absolute bottom-0 w-full">
			<Button
				icon={page === ACTIVE_PAGE.HOME ? <IoHome /> : <IoHomeOutline />}
				width={64}
				onClick={() => setPage(ACTIVE_PAGE.HOME)}
			/>
			<Button
				icon={page === ACTIVE_PAGE.GIFT_LIST ? <IoList /> : <IoListOutline />}
				width={64}
				onClick={() => setPage(ACTIVE_PAGE.GIFT_LIST)}
			/>
			<Button
				icon={page === ACTIVE_PAGE.GIFT_DETAIL ? <IoGift /> : <IoGiftOutline />}
				width={64}
				onClick={() => setPage(ACTIVE_PAGE.GIFT_DETAIL)}
			/>
			<Button
				icon={
					page === ACTIVE_PAGE.LANGUAGES ? (
						<IoLanguage />
					) : (
						<IoLanguageOutline />
					)
				}
				width={64}
				onClick={() => setPage(ACTIVE_PAGE.LANGUAGES)}
			/>
		</div>
	);
}
