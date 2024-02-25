import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { activePage } from "../../atoms/Navigation/activePageATM";
import ACTIVE_PAGE from "../MobileNavigation/constants";

export default function Home() {
	const [, setHomepage] = useAtom(activePage);
	const { t } = useTranslation();

	setHomepage(ACTIVE_PAGE.HOME);

	return (
		<>
			<h1>
				Our Translated Header:
				{t("headerTitle")}
			</h1>
		</>
	);
}
