import { useAtom } from "jotai";
import { useTranslation } from "react-i18next";
import { IoArrowBackOutline } from "react-icons/io5";
import { activePage } from "../../atoms/Navigation/activePageATM";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import ACTIVE_PAGE from "./constants";
import { ReactNode } from "react";
import MobileTopNavigation from "../../molecules/MobileTopNavigation/MobileTopNavigation";
import MobileBottomNavigation from "../../molecules/MobileBottomNavigation/MobileBottomNavigation";

interface IMobileNavigation {
	children: ReactNode;
}

function MobileNavigation({ children }: IMobileNavigation) {
	return (
		<div className="relative h-dvh">
			<MobileTopNavigation />
			{children}
			<MobileBottomNavigation />
		</div>
	);
}

export default MobileNavigation;
