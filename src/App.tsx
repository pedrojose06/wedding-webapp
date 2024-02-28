import { useAtom } from "jotai";
import { Suspense, lazy } from "react";
import { activePage } from "./atoms/Navigation/activePageATM";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import useDevice from "./hooks/useDevice";
import ACTIVE_PAGE from "./templates/MobileNavigation/constants";

const Home = lazy(() => import("./templates/Home/Home"));
const GiftList = lazy(() => import("./templates/GiftList/GiftList"));
const GiftDetails = lazy(() => import("./templates/GiftDetails/GiftDetails"));
const ChangeLanguage = lazy(
	() => import("./templates/ChangeLanguage/ChangeLanguage"),
);
const MobileNavigation = lazy(
	() => import("./templates/MobileNavigation/MobileNavigation"),
);

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
				<Suspense
					fallback={
						<div className="p-4">
							<SkeletonLoader count={1} height={250} />
							<SkeletonLoader
								count={3}
								height={40}
								width="50%"
								className="mt-7"
							/>
							<SkeletonLoader count={1} height={70} className="mt-7" />
						</div>
					}
				>
					<MobileNavigation>{PAGES[page]}</MobileNavigation>
				</Suspense>
			) : (
				PAGES[page]
			)}
		</div>
	);
}
export default App;
