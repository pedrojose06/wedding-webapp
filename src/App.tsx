import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileNavigation from "./assets/templates/MobileNavigation/MobileNavigation";
import useDevice from "./assets/hooks/useDevice";
import Home from "./assets/templates/Home/Home";
import { useAtom } from "jotai";
import { activePage } from "./assets/atoms/Navigation/activePageATM";
import ACTIVE_PAGE, {
	PAGES,
} from "./assets/templates/MobileNavigation/constants";
import GiftList from "./assets/templates/GiftList/GiftList";
import GiftDetails from "./assets/templates/GiftDetails/GiftDetails";

function App() {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(language);
	const isMobile = useDevice();
	const [page, setPage] = useAtom(activePage);

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === "en" ? "fr" : "en";
		setCurrentLanguage(newLanguage);
		changeLanguage(newLanguage);
	};
	const PAGES = {
		[ACTIVE_PAGE.HOME]: <Home />,
		[ACTIVE_PAGE.GIFT_LIST]: <GiftList />,
		[ACTIVE_PAGE.GIFT_LIST_DETAIL]: <GiftDetails />,
	};
	return (
		<div className="App">
			{isMobile ? (
				<MobileNavigation>{PAGES[page]}</MobileNavigation>
			) : (
				PAGES[page]
			)}
		</div>
	);
}
export default App;
