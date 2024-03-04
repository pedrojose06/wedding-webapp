import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { activePage } from "../../atoms/Navigation/activePageATM";
import ACTIVE_PAGE from "../MobileNavigation/constants";

export default function ChangeLanguage() {
	const [page, setPage] = useAtom(activePage);
	setPage(ACTIVE_PAGE.LANGUAGES);

	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();

	const handleChangeLanguage = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		changeLanguage(event.target.value);
	};
	return (
		<select onChange={handleChangeLanguage} value={language}>
			<option value="fr">French</option>
			<option value="pt">Portuguese</option>
			<option value="en">English</option>
		</select>
	);
}
