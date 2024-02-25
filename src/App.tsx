import { useState } from "react";
import { useTranslation } from "react-i18next";
import MobileNavigation from "./assets/templates/MobileNavigation/MobileNavigation";
import useDevice from "./assets/hooks/useDevice";
import Home from "./assets/templates/Home/Home";
import { useAtom } from "jotai";
import { activePage } from "./assets/atoms/Navigation/activePageATM";
import ACTIVE_PAGE from "./assets/templates/MobileNavigation/constants";

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

	return (
		<div className="App">
			{isMobile && <MobileNavigation />}
			{page === ACTIVE_PAGE.HOME && <Home />}
		</div>
	);
}
export default App;
