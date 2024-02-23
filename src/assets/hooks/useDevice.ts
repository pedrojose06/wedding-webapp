import { useEffect, useState } from "react";

export type TDevice = "mobile" | "desktop";

const [isMobile, setIsMobile] = useState(false);

const useDevice = () => {
	useEffect(() => {
		const { userAgent } = navigator;
		userAgent.includes("Mobi") ? setIsMobile(true) : setIsMobile(false);
	}, []);

	return isMobile;
};

export default useDevice;
