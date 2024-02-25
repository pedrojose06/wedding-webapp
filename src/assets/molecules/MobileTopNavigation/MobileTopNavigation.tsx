import { useAtom } from "jotai";
import { IoArrowBackOutline } from "react-icons/io5";
import { activePage } from "../../atoms/Navigation/activePageATM";
import { useTranslation } from "react-i18next";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";

export default function MobileTopNavigation() {
	const btnIcon = <IoArrowBackOutline />;
	const [page, setPage] = useAtom(activePage);
	const { t } = useTranslation();
	return (
		<div
			className={`flex justify-between h-16 border border-b-gray-200 ${
				page === ACTIVE_PAGE.HOME ? "" : "pl-16"
			}`}
		>
			{page !== ACTIVE_PAGE.HOME && <Button icon={btnIcon} width={64} />}
			<Title text={t(page)} />
		</div>
	);
}
