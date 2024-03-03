import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./templates/Home/Home"));
const GiftList = lazy(() => import("./templates/GiftList/GiftList"));
const GiftDetails = lazy(() => import("./templates/GiftDetails/GiftDetails"));
const QrCode = lazy(() => import("./templates/QrCode/QrCode"));
const ChangeLanguage = lazy(
	() => import("./templates/ChangeLanguage/ChangeLanguage"),
);

export default function MainRoutes() {
	const { t: tRoute } = useTranslation("routes");
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path={tRoute("wedding")} element={<Home />} />
			<Route path={tRoute("gift")} element={<GiftDetails />} />
			<Route path={tRoute("gift-list")} element={<GiftList />} />
			<Route path={tRoute("languages")} element={<ChangeLanguage />} />
			<Route path={tRoute("qr-code")} element={<QrCode />} />
		</Routes>
	);
}
