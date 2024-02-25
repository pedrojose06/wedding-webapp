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
