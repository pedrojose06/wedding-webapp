import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { activePage } from "../../atoms/Navigation/activePageATM";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import ACTIVE_PAGE from "../../templates/MobileNavigation/constants";

export default function MobileTopNavigation() {
	const [page] = useAtom(activePage);
	const btnIcon = <IoArrowBackOutline />;
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<div
			className={`flex justify-between h-16 border border-b-gray-200 bg-white sticky top-0 ${
				page === ACTIVE_PAGE.HOME ? "" : "pr-16"
			}`}
		>
			{page !== ACTIVE_PAGE.HOME && (
				<Button
					className="w-16 h-16 flex justify-center items-center"
					icon={btnIcon}
					onClick={() => navigate(-1)}
				/>
			)}
			<Title text={t(page)} />
		</div>
	);
}
