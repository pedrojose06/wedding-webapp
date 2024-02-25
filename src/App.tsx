import MobileNavigation from "./templates/MobileNavigation/MobileNavigation";
import useDevice from "./hooks/useDevice";
import Home from "./templates/Home/Home";
import { useAtom } from "jotai";
import { activePage } from "./atoms/Navigation/activePageATM";
import ACTIVE_PAGE from "./templates/MobileNavigation/constants";
import GiftList from "./templates/GiftList/GiftList";
import GiftDetails from "./templates/GiftDetails/GiftDetails";
import ChangeLanguage from "./templates/ChangeLanguage/ChangeLanguage";

function App() {
	const isMobile = useDevice();
	const [page, setPage] = useAtom(activePage);

	const PAGES = {
		[ACTIVE_PAGE.HOME]: <Home />,
		[ACTIVE_PAGE.GIFT_LIST]: <GiftList />,
		[ACTIVE_PAGE.GIFT_DETAIL]: <GiftDetails />,
		[ACTIVE_PAGE.LANGUAGES]: <ChangeLanguage />,
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
