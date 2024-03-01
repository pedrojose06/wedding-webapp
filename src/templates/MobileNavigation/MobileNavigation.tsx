import { ReactNode } from "react";
import MobileBottomNavigation from "../../molecules/MobileBottomNavigation/MobileBottomNavigation";
import MobileTopNavigation from "../../molecules/MobileTopNavigation/MobileTopNavigation";

interface IMobileNavigation {
	children: ReactNode;
}

function MobileNavigation({ children }: IMobileNavigation) {
	return (
		<div className="relative h-dvh ">
			<MobileTopNavigation />
			{children}
			<MobileBottomNavigation />
		</div>
	);
}

export default MobileNavigation;
