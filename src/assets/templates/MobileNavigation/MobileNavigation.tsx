import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { IoArrowBackOutline } from "react-icons/io5";
import { activePage } from "../../atoms/Navigation/activePageATM";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import ACTIVE_PAGE from "./constants";

function MobileNavigation() {
	const btnIcon = <IoArrowBackOutline />;
	const [page, setPage] = useAtom(activePage);
	const { t } = useTranslation();

	return (
		<div
			className={`flex justify-between h-16 border border-b-gray-200 ${
				page === ACTIVE_PAGE.HOME ? "pr-16" : "pl-16"
			}`}
		>
			<Button icon={btnIcon} width={64} />
			<Title text={t(page)} />
		</div>
	);
}

export default MobileNavigation;
