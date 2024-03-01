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
		[ACTIVE_PAGE.HOME]: (
			<Suspense
				fallback={
					<div className="p-4 h-full">
						<SkeletonLoader count={1} height={200} />
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
				<Home />
			</Suspense>
		),
		[ACTIVE_PAGE.GIFT_LIST]: (
			<Suspense
				fallback={
					<div className="p-4 h-full">
						<SkeletonLoader count={1} height={40} width="100%" />
						<SkeletonLoader
							count={3}
							height={40}
							width="50%"
							className="mt-7"
						/>
						<SkeletonLoader count={1} width={70} height={40} className="mt-7" />
					</div>
				}
			>
				<GiftList />
			</Suspense>
		),
		[ACTIVE_PAGE.GIFT_DETAIL]: (
			<Suspense
				fallback={
					<div className="p-4  h-full">
						<SkeletonLoader count={1} height={200} />
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
				<GiftDetails />
			</Suspense>
		),
		[ACTIVE_PAGE.LANGUAGES]: (
			<Suspense
				fallback={
					<div className="p-4  h-full">
						<SkeletonLoader count={1} height={200} />
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
				<ChangeLanguage />
			</Suspense>
		),
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
