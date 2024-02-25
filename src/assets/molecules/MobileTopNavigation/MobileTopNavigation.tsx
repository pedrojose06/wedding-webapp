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

	const PAGE_BACK = {
		[ACTIVE_PAGE.HOME]: ACTIVE_PAGE.HOME,
		[ACTIVE_PAGE.GIFT_LIST]: ACTIVE_PAGE.GIFT_LIST,
		[ACTIVE_PAGE.GIFT_DETAIL]: ACTIVE_PAGE.GIFT_DETAIL,
	};

	return (
		<div
			className={`flex justify-between h-16 border border-b-gray-200 ${
				page === ACTIVE_PAGE.HOME ? "" : "pr-16"
			}`}
		>
			{page !== ACTIVE_PAGE.HOME && (
				<Button
					icon={btnIcon}
					width={64}
					onClick={() => setPage(PAGE_BACK[page])}
				/>
			)}
			<Title text={t(page)} />
		</div>
	);
}
